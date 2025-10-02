import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ChatProvider } from '../components/chatProvider';
import { StructuredData } from '../components/structuredData';
import { LeadMagnet } from '../components/LeadMagnet';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Root-Cause Nutrition for Fatigue & Gut Health | Empowered Nutrition with Inna',
    template: '%s | Empowered Nutrition with Inna'
  },
  description: 'Transform your health with functional testing and personalized nutrition. Specialized care for women 30-55 experiencing fatigue, anxiety, gut issues, and perimenopause symptoms.',
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
  authors: [{ name: 'Inna Topiler', url: 'https://empowerednutritionwithinna.com' }],
  creator: 'Empowered Nutrition with Inna',
  publisher: 'Empowered Nutrition with Inna',
  metadataBase: new URL('https://empowerednutritionwithinna.com'),
  alternates: {
    canonical: 'https://empowerednutritionwithinna.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Root-Cause Nutrition for Fatigue & Gut Health | Empowered Nutrition with Inna',
    description: 'Functional testing + personalized nutrition for women seeking energy, clarity, and relief from chronic symptoms',
    url: 'https://empowerednutritionwithinna.com',
    siteName: 'Empowered Nutrition with Inna',
    images: [
      {
        url: '/inna.jpg',
        width: 1200,
        height: 630,
        alt: 'Inna Topiler, Functional Nutritionist specializing in gut health and women\'s wellness',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root-Cause Nutrition for Fatigue & Gut Health',
    description: 'Functional testing + personalized nutrition for women seeking energy and gut health.',
    images: ['/inna.jpg'],
    creator: '@InnaTopiler',
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  category: 'business',
  classification: 'Functional Nutrition and Health Services',
  other: {
    'practice.type': 'Functional Nutrition',
    'specialization': 'Women\'s Health, Gut Health, Hormone Balance',
    'certification': 'FDN-P Certified',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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