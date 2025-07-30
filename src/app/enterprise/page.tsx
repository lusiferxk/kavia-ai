import { EnterpriseHero } from './EnterpriseHero';
import { ModularSolution } from '@/sections/ModularSolution/ModularSolution';
// import AdvantagesSection from '@/sections/advantages';
// import BuiltWithKavia from "@/sections/BuiltWithKavia";
// import IntegrationSection from '@/sections/integration';

export default function EnterprisePage() {
  return (
    <div className="bg-[#231F20] text-white">
      <EnterpriseHero />
      {/* <ModularSolution /> */}
      {/* <AdvantagesSection />
      <BuiltWithKavia />
      <IntegrationSection /> */}
    </div>
  );
}