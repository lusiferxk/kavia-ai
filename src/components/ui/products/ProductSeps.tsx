import React from 'react';

const ProductSteps = () => {
  const steps = [
    { number: '1', title: 'Inspect', color: 'bg-[#F4682C]', sectionId: 'inspect-section' },
    { number: '2', title: 'Plan', color: 'bg-[#4997B3]', sectionId: 'plan-section' },
    { number: '3', title: 'Build', color: 'bg-[#F4B25A]', sectionId: 'build-section' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Adjust this value based on your header height or desired offset
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const ChevronIcon = () => (
    <svg className="opacity-50" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <rect width="20" height="20" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0)">
          <path d="M11.4531 9.9993L7.51562 6.0618L8.00125 5.57617L12.4244 9.9993L8.00125 14.4224L7.51562 13.9368L11.4531 9.9993Z" fill="white"/>
        </g>
      </g>
    </svg>
  );

  return (
    <div className="flex flex-col items-center mb-12 pt-16">
      {/* Gradient Line with Circle */}
      {/* <div className="relative mb-6">
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-white/65 to-white/65" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 border border-white/70" />
      </div> */}

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
  {/* Desktop View */}
  <div className="hidden md:flex justify-start items-center gap-3 py-2 px-3 border border-white/15 rounded-full">
    {steps.map((step, index) => (
      <React.Fragment key={step.number}>
        <div
          className={`flex items-center gap-2.5 py-1 pr-4 pl-2 ${step.color} border border-[rgba(35,31,32,0.15)] rounded-full cursor-pointer hover:opacity-90 transition-opacity`}
          onClick={() => scrollToSection(step.sectionId)}
        >
          <div className="flex justify-center items-center w-9 h-9 bg-black/15 rounded-full">
            <p className="text-white text-xl font-medium leading-tight">
              {step.number}
            </p>
          </div>
          <span className="text-white text-lg font-bold leading-tight tracking-wide">
            {step.title}
          </span>
        </div>
        {index < steps.length - 1 && (
          <div className="hidden md:flex">
            <ChevronIcon />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>

  {/* Mobile View */}
  <div className="flex flex-col md:hidden items-center gap-4 py-4 px-6 border border-white/15 rounded-[80px]">
    {steps.map((step) => (
      <div
        key={step.number}
        className={`flex flex-col items-center justify-center w-full max-w-[200px] py-3 px-4 ${step.color} border border-[rgba(35,31,32,0.15)] text-white rounded-full shadow-md cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={() => scrollToSection(step.sectionId)}
      >
        <div className="flex justify-center items-center w-12 h-12 bg-black/15 rounded-full mb-2">
          <p className="text-lg font-bold">{step.number}</p>
        </div>
        <span className="text-base font-medium">{step.title}</span>
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

export default ProductSteps;