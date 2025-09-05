import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ChatProvider } from '../components/chatProvider';
import { StructuredData } from '../components/structuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Rosales Yard Maintenance - Austin\'s Premier Lawn Care Service | Buda, Kyle, Manchaca',
    template: '%s | Rosales Yard Maintenance'
  },
  description: 'Professional lawn care and landscaping services in Austin, Buda, Kyle & Manchaca. Owner-operated since 2019. Get instant quotes, 100% satisfaction guaranteed. Call (512) 694-1773',
  keywords: [
    'lawn care Austin TX',
    'landscaping services Buda',
    'yard maintenance Kyle Texas',
    'professional lawn mowing Manchaca',
    'Austin lawn service',
    'South Austin landscaping',
    'lawn care near me',
    'yard cleanup Austin'
  ],
  authors: [{ name: 'John Rosales', url: 'https://rosalesyard.com' }],
  creator: 'Rosales Yard Maintenance',
  publisher: 'Rosales Yard Maintenance',
  metadataBase: new URL('https://rosalesyard.com'),
  alternates: {
    canonical: 'https://rosalesyard.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Rosales Yard Maintenance - Austin\'s Premier Lawn Care Service',
    description: 'Professional lawn care serving Austin, Buda, Kyle & Manchaca since 2019. 500+ satisfied customers. Get instant quotes!',
    url: 'https://rosalesyard.com',
    siteName: 'Rosales Yard Maintenance',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful lawn transformation by Rosales Yard Maintenance in Austin, Texas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rosales Yard Maintenance - Austin\'s Premier Lawn Care',
    description: 'Professional lawn care serving Austin area since 2019. 500+ satisfied customers.',
    images: ['/twitter-home.jpg'],
    creator: '@RosalesYard',
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
  classification: 'Lawn Care and Landscaping Services',
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Austin',
    'geo.position': '30.2672;-97.7431',
    'ICBM': '30.2672, -97.7431',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E7D32" />
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
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}