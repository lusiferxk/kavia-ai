import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kavia',
  description: 'Privacy Policy for Kavia - Learn how we protect and handle your data',
  openGraph: {
    title: 'Privacy Policy | Kavia',
    description: 'Privacy Policy for Kavia - Learn how we protect and handle your data',
  },
}

export default function PrivacyLayout({
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