// src/app/layout.tsx
import { Suspense } from 'react' // Add this import
import { Toaster } from 'sonner';

import { Inter } from 'next/font/google'

import   {GoogleAnalytics}  from '@/components/analytics/google-analytics'
import { metadata } from '@/config/metadata'
import CookieBanner from '@/components/CookieBanner';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import '@/styles/globals.css'
import '../buildexportcomponent/styles/globals.css';


const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta property="og:site_name" content="KAVIA AI" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        {/* LinkedIn specific meta tags */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:site" content="@kaviaai" />
      </head>
      <body className={`${inter.className} bg-[#231f20] text-white antialiased`}>

        <div className="relative">
          {children}
          <Toaster />
          <Suspense fallback={null}>

          <GoogleAnalytics  />

          </Suspense>
          <CookieBanner/>
        </div>
      </body>
    </html>
  )
}

