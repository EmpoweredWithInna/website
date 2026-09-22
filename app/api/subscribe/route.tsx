import React from "react";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { SubscriptionEmailTemplate } from "../../../components/SubscriptionEmailTemplate";
import { LeadMagnetEmailTemplate } from "../../../components/LeadMagnetEmailTemplate";
import { NewsletterWelcomeEmailTemplate } from "../../../components/NewsletterWelcomeEmailTemplate";
import { GUIDE_FILE_NAME, GUIDE_PATH, SITE_URL } from "../../../lib/site";

const ADMIN_EMAIL = "healthy@empoweredwithinna.com";
const FROM_EMAIL =
  "Empowered Wellness with Inna <healthy@empoweredwithinna.com>"; // This must be a verified domain on Resend
const PDF_URL = `${SITE_URL}${GUIDE_PATH}`;

type SubscriptionIntent = "guide" | "newsletter";

function getResendClient(apiKey: string) {
  const baseUrl = process.env.RESEND_API_BASE_URL;
  return new Resend(apiKey, baseUrl ? { baseUrl } : undefined);
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const intent: SubscriptionIntent =
      body.intent === "newsletter" ? "newsletter" : "guide";

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = getResendClient(apiKey);
    const userEmailHtml = await render(
      intent === "guide" ? (
        <LeadMagnetEmailTemplate email={email} downloadUrl={PDF_URL} />
      ) : (
        <NewsletterWelcomeEmailTemplate />
      ),
    );

    const attachments =
      intent === "guide"
        ? [
            {
              content: await readFile(
                join(process.cwd(), "public", GUIDE_FILE_NAME),
              ),
              filename: GUIDE_FILE_NAME,
              contentType: "application/pdf",
            },
          ]
        : undefined;

    const { error: userError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject:
        intent === "guide"
          ? "Your 7-Day Gut-Hormones Reset Meal Plan"
          : "Welcome to Notes from Inna",
      html: userEmailHtml,
      attachments,
    });

    if (userError) {
      console.error("Resend API Error (user email):", userError);
      return NextResponse.json(
        { error: "We couldn't send your email. Please try again." },
        { status: 500 },
      );
    }

    // Send notification email to admin
    const adminEmailComponent = <SubscriptionEmailTemplate email={email} />;
    const adminEmailHtml = await render(adminEmailComponent);

    const { error: adminError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject:
        intent === "guide"
          ? "New Lead Magnet Download Request"
          : "New Notes from Inna Subscriber",
      html: adminEmailHtml,
    });

    if (adminError) {
      console.error("Resend API Error (admin notification):", adminError);
      // Don't fail the request if admin notification fails - user already got their guide
    }

    return NextResponse.json({
      message:
        intent === "guide"
          ? "Success! Check your email for the guide."
          : "Thank you! Check your inbox for a welcome note.",
    });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
