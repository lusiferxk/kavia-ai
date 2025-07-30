// src/app/book-demo/layout.tsx
import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function DemoLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#1C1917]">
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