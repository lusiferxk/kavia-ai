// import { EnterpriseHero } from './ProductHero';




// export default function EnterprisePage() {
//   return (
//     <>
//           <div className="bg-amber-500 text-black py-2 px-4 text-center font-medium">
//         🚧 Work in Progress - Draft Version 🚧
//       </div>
//     <div className="bg-[#231F20] text-white">
//       <EnterpriseHero /> 
//     </div>
//     </>
//   );
// }

// src/app/enterprise/page.tsx
import { EnterpriseHero } from './ProductHero';

export default function EnterprisePage() {
  return (
    <>
      {/* Work in Progress Banner */}
      {/* <div className="fixed bottom-6 right-6 z-[100] bg-[#2A2627]/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-wide">  🚧 Images/video needs to be updated 🚧</span>
        </div>
      </div> */}

      <div className="bg-[#231F20] text-white">
        <EnterpriseHero />
      </div>
    </>
  );
}