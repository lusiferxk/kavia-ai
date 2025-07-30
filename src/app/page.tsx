// src/app/page.tsx

import { Header } from '@/components/layout/header'
import { Hero } from '@/sections/hero'
import Footer  from '@/components/layout/footer'
// import CarouselSlider from '@/components/ui/3dCarousel/CarouselSlider';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">


      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <div className='pt-[100px]'>
          {/* <CarouselSlider /> */}

          </div>

          <Hero />
  
        </main>
        <Footer />
      </div>
    </div>
  )
}