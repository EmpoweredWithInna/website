import React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { SubscriptionEmailTemplate } from '../../../components/SubscriptionEmailTemplate';
import { LeadMagnetEmailTemplate } from '../../../components/LeadMagnetEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'healthy@empoweredwithinna.com';
const FROM_EMAIL = 'Empowered Nutrition Newsletter <onboarding@resend.dev>'; // This must be a verified domain on Resend
const PDF_URL = 'https://empoweredwithinna.com/7_Day_Gut_Brain_Reset_Meal_Plan.pdf';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
        }

        // Send lead magnet email to the user
        const leadMagnetEmailComponent = <LeadMagnetEmailTemplate email={email} downloadUrl={PDF_URL} />;
        const leadMagnetEmailHtml = await render(leadMagnetEmailComponent);

        const { data: userData, error: userError } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [email],
            subject: '🌿 Your 7-Day Gut-Brain Reset Meal Plan is Here!',
            html: leadMagnetEmailHtml,
            attachments: [
                {
                    path: PDF_URL,
                    filename: '7_Day_Gut_Brain_Reset_Meal_Plan.pdf',
                },
            ],
        });

        if (userError) {
            console.error('Resend API Error (user email):', userError);
            return NextResponse.json({ error: 'Failed to send the guide. Please try again.' }, { status: 500 });
        }

        console.log('Lead magnet email sent to user successfully!', userData);

        // Send notification email to admin
        const adminEmailComponent = <SubscriptionEmailTemplate email={email} />;
        const adminEmailHtml = await render(adminEmailComponent);

        const { data: adminData, error: adminError } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [ADMIN_EMAIL],
            subject: 'New Lead Magnet Download Request',
            html: adminEmailHtml,
        });

        if (adminError) {
            console.error('Resend API Error (admin notification):', adminError);
            // Don't fail the request if admin notification fails - user already got their guide
        } else {
            console.log('Admin notification sent successfully!', adminData);
        }

        return NextResponse.json({ message: 'Success! Check your email for the guide.' });
    } catch (err) {
        console.error('Server Error:', err);
        return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
}
