'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Start a Project",
        description:
            "On the Kavia home page, create a new project by entering a prompt, selecting the application type (web or mobile), and choosing your preferred tech stack.",
    },
    {
        number: 2,
        title: "Customize Project Settings",
        description:
            "After launching the project, review and adjust your:",
        points: [
            "Project Overview",
            "Core Features",
            "Tech Stack",
            "Design Layout",
            "Theme Colors",
            "Third-party Integrations",
        ]
    },
    {
        number: 3,
        title: "Import Your Figma Design",
        image: '/images/features/figma/img1.png',
        description:
            "Once inside the Project Dashboard, click the + icon at the bottom-left of the chat input.Choose Figma Design from the options.",
    },
    {
        number: 4,
        title: "Enter Your Figma Link",
        image: '/images/features/figma/img2.png',
        description:
            "A popup will appear prompting you to enter your Figma file URL. Make sure the Figma link is publicly accessible.",
    },
    {
        number: 5,
        title: "Extract Your Frames",
        image: '/images/features/figma/img3.png',
        description:
            "Click “Extract Figma Design into Kavia”. Kavia will fetch all available frames from your design. Select the frames you want to develop and then click “Extract Selected Frames.”",
    },
    {
        number: 6,
        title: "Start Building",
        description:
            "Use the chat to tell Kavia what to build:",
        points: [
            "“Start with the login page.”",
            "“Build all selected frames.”",
            "“Develop only the dashboard view for now.”"
        ]
    },
]

const recentData = [
    { name: "Attach Files", link: "/documentation/features/attach" },
    { name: "Code Generation", link: "/documentation/features/code-generation" },
]

export default function Figma() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Figma to Kavia", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Figma to Kavia</h1>

            <p>
                Import your Figma designs into Kavia and instantly begin building your application.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <h4 className="text-lg font-semibold text-white">Step-by-step:</h4>

                    <FeatureList features={steps} />

                    <p>
                        Kavia will translate your designs into production-ready code using the stack you've configured.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}