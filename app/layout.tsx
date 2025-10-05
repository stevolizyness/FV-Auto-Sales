import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Analytics } from '@/components/analytics'
import { Toaster } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'FV Auto Sales | Used Cars in Orlando | Buy • Sell • Trade',
    template: '%s | FV Auto Sales'
  },
  description: 'Shop quality used cars in Central Florida. Financing available. We buy any car. Auction Access $300 per car. Se habla Español.',
  keywords: ['used cars Orlando', 'car dealership', 'auto financing', 'trade in', 'auction access', 'Central Florida cars'],
  authors: [{ name: 'FV Auto Sales' }],
  creator: 'FV Auto Sales',
  publisher: 'FV Auto Sales',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fvautosales.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FV Auto Sales | Used Cars in Orlando',
    description: 'Quality used cars in Central Florida with financing available',
    url: 'https://fvautosales.com',
    siteName: 'FV Auto Sales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FV Auto Sales - Quality Used Cars',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FV Auto Sales | Used Cars Orlando',
    description: 'Buy • Sell • Trade used cars in Central Florida',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-white text-charcoal`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Analytics />
      </body>
    </html>
  )
}