'use client'

import { StepCard } from './StepsCard'

const steps = [
  {
    variant: 'inspect',
    icon: "/assets/icons/inspect-icon.svg",
    title: "INSPECT",
    description: "Analyze your Codebase",
    steps: [
      {
        title: "Understand Complex Codebase",
        description  :"Extract specific Architectural model, feature details and functionalities from the Codebase",
        // videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/inspect/Exploring_Kavia_AI_Knowledge_Graph_Querying_and_Mind_Map_Creation_1.mp4",
        videoUrl:"https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/Inspect_1.mp4",
        // videoUrl: "/assets/videos/inspect_1.mp4",

        thumbnail: "/assets/videos/thumbnail/inspect_1.svg"
      },
      {
        title: "Create Custom Documentation",
        description: "Create comprehensive documentation with sequence diagrams and component interactions",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/inspect/Developer_Onboarding_Documentation_Guide_2.mp4",
        thumbnail: "/assets/videos/thumbnail/inspect_2.svg"
      },
      {
        title: "In-Depth Analysis",
        description: "Generate deep code analysis with recommendations for bug fixes and improvements",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/inspect/Comprehensive_Gap_Analysis_Overview_3.mp4",
        thumbnail: "/assets/videos/thumbnail/inspect_3.svg"
      }
    ],
    // videoUrl: "/assets/videos/inspect.mp4",
    // thumbnail: "/assets/images/inspect-thumbnail.png"
  },
  {
    variant: 'plan',
    icon: "/assets/icons/plan.svg",
    title: "PLAN",
    description: "Ideate, Research and start Creating",
    steps: [
      {
        title: "Create Detailed Architecture and Requirements",
        description: "Visualize & plan your project by refining requirements & creating architectures from prompting",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/plan/InsureTech_Digital_Banking_Platform_Planning_1.mp4",
        thumbnail: "/assets/videos/thumbnail/Plan_1.svg"
      },
      {
        title: "Setup project from existing docs",
        description: "Transform requirement documents into detailed technical specifications for you your project",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/plan/Gaming_App_Development_for_Civic_Engagement_and_Education.mp4",
        thumbnail: "/assets/videos/thumbnail/Plan_2.svg"
      },
      {
        title: "Extract Plan Documents",
        description: "Capture all your Requirements, Architectures and Interfaces as Documents for enterprise use",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/plan/EKYC Insurance_Bank_Application_Documentation_Overview_3.mp4",
        thumbnail: "/assets/videos/thumbnail/Plan_3.svg"
      }
    ],
    // videoUrl: "/assets/videos/inspect.mp4",
    // thumbnail: "/assets/images/inspect-thumbnail.png"
  },
  {
    variant: 'build',
    icon: "/assets/icons/build.svg",
    title: "BUILD",
    description: "Code generation and implementation",
    steps: [
      {
        title: "Automated Code Generation",
        description: "Convert architecture to production-ready code with tests and deployment configs integrated",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/build/Creating_a_Chatbot_to_Interact_with_PDF_Files_Using_Caveat_Tool.mp4",
        thumbnail: "/assets/videos/thumbnail/Build_1.svg"
      },
      {
        title: "Convert Design Prototypes to Code",
        description: "Transform Figma designs into responsive portals & applications with API integrations",
        // videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/build/Morse_Code_Converter_Application_Development_Process.mp4",
        videoUrl:"https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/Build_3_new.mp4",
        thumbnail: "/assets/videos/thumbnail/Build_2.svg"
      },
      {
        title: "Modify Existing Codebase",
        description: "Handle multi-repo codebases for smart modifications with automated analysis and code maintainance.",
        videoUrl: "https://kavia-website-artifacts.s3.us-east-1.amazonaws.com/videos/Build_3.mp4",
        // videoUrl: "/assets/videos/Build_3.mp4",
        thumbnail: "/assets/videos/thumbnail/Build_3.svg"
      }
    ],
    // videoUrl: "/assets/videos/inspect.mp4",
    // thumbnail: "/assets/images/inspect-thumbnail.png"
  }
]

export function ModularSolution() {
  return (
    <section className="relative">
      {/* Center Line with Dot */}
      {/* <div className="flex flex-col items-center mb-12 pt-[68px]"> */}
        {/* Gradient Line with Circle */}
        {/* <div className="relative mb-6">
          <div className="w-[1.5px] h-[120px] bg-gradient-to-b from-transparent from-0% via-[rgba(255,255,255,0.65)] via-30% to-[rgba(255,255,255,0.65)]" />
          <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 border border-white/70" />
        </div> */}
        
        {/* Badge */}
        {/* <div className="px-2.5 py-0 bg-[#37322f] rounded-[999px] shadow-[0px_1px_0px_rgba(214,207,194,0.12)_inset] flex items-center justify-center">
          <span className="text-white text-xs font-medium font-['Inter'] leading-6 tracking-[0.672px]">
            Modular Solutions
          </span>
        </div>
      </div> */}

      {/* Title */}
      <div className="container mx-auto max-w-[900px] mb-24 pt-[68px]">
  <h2 className="text-center text-[48px] font-semibold font-['Inter'] leading-[62px] tracking-[0.96px] text-white">
    Built for Enterprise. Simplified<br/>for Software Creators
  </h2>
</div>

      {/* Cards Section */}
      <div className="container mx-auto px-4">
        <div>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              variant={step.variant}
              icon={step.icon}
              title={step.title}
              description={step.description}
              steps={step.steps}
              videoUrl={step.videoUrl}
              thumbnail={step.thumbnail}
              className="mb-[80px]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}