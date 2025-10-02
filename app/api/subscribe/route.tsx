import React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { SubscriptionEmailTemplate } from '../../../components/SubscriptionEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'healthy@empoweredwithinna.com';
const FROM_EMAIL = 'Empowered Nutrition Newsletter <onboarding@resend.dev>'; // This must be a verified domain on Resend

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

        const emailComponent = <SubscriptionEmailTemplate email={email} />;
        const emailHtml = await render(emailComponent);

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: 'New subscription to mailing list',
            html: emailHtml,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Failed to process subscription.' }, { status: 500 });
        }

        console.log('Subscription email sent successfully!', data);
        return NextResponse.json({ message: 'Thank you for subscribing! You\'ll receive our weekly health tips soon.' });
    } catch (err) {
        console.error('Server Error:', err);
        return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
}
