import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ChatProvider } from '../components/chatProvider';
import { StructuredData } from '../components/structuredData';
import { LeadMagnet } from '../components/LeadMagnet';
import { SITE } from '../lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Root-Cause Nutrition for Fatigue & Gut Health | Empowered Wellness with Inna',
    template: '%s | Empowered Wellness with Inna'
  },
  description: SITE.description,
  keywords: [
    'functional nutrition',
    'gut health specialist',
    'chronic fatigue treatment',
    'functional medicine testing',
    'GI-MAP testing',
    'DUTCH hormone testing',
    'digestive health',
    'women\'s health nutrition',
    'perimenopause support',
    'anxiety nutrition therapy',
    'brain fog treatment',
    'IBS functional nutrition'
  ],
  authors: [{ name: SITE.practitionerName, url: SITE.origin }],
  creator: SITE.practitionerName,
  publisher: SITE.name,
  metadataBase: new URL(SITE.origin),
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Root-Cause Nutrition for Fatigue & Gut Health | Empowered Wellness with Inna',
    description: 'Functional testing + personalized nutrition for women seeking energy, clarity, and relief from chronic symptoms',
    url: '/',
    siteName: SITE.name,
    images: ['/opengraph-image'],
    locale: SITE.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root-Cause Nutrition for Fatigue & Gut Health',
    description: 'Functional testing + personalized nutrition for women seeking energy and gut health.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
  classification: 'Functional Nutrition and Health Services',
  other: {
    'practice.type': 'Functional Nutrition',
    'specialization': 'Women\'s Health, Gut Health, Hormone Balance',
    'certification': 'CNTP Certified',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#41ab5d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <ChatProvider>
          <div className="flex flex-col min-h-screen">
            {/* <PromoBanner /> */}
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <LeadMagnet autoOpen={true} />
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
