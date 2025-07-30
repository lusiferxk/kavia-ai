// src/app/layout.tsx
import { Inter } from 'next/font/google'

import { GoogleAnalytics } from '@/components/analytics/google-analytics'
import { metadata } from '@/config/metadata'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import '@/styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#231f20] text-white antialiased`}>

        <div className="relative">
          {children}
          <GoogleAnalytics />

        </div>
      </body>
    </html>
  )
}