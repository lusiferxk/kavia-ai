// src/app/page.tsx

import { Header } from '@/components/layout/header'
import { Hero } from '@/sections/hero'
import Footer  from '@/components/layout/footer'
// import  BuiltWithKavia from "@/sections/BuiltWithKavia"
export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">


      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          {/* <BuiltWithKavia/>  */}
          {/* <AdvantagesSection/> */}
          {/* <ModularSolution /> */}
          {/* Add other sections here */}
        </main>
        <Footer />
      </div>
    </div>
  )
}