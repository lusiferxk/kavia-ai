import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Kavia',
  description: 'Terms of Service for Kavia - Our terms and conditions',
  openGraph: {
    title: 'Terms of Service | Kavia',
    description: 'Terms of Service for Kavia - Our terms and conditions',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#231F20]">
      <div className="relative z-10">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
} 