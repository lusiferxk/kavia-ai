'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList, { Feature } from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Step 1: Navigate to the project list.",
        description:
            "Here, you have two options: create a new project or import an existing one. For this tutorial, we'll focus on creating a new project.",
        image: "/images/features/planning/img1.png",
    },
    {
        number: 2,
        title: "Step 2: Enter the title of your new application.",
        description:
            "",
        image: "/images/features/planning/img2.png",
    },
    {
        number: 3,
        title: "Step 3: Choose between assisted setup or manual setup.",
        description:
            "If you're a first-time user, we recommend the assisted setup. This will guide you through the entire project planning phase.",
        image: "/images/features/planning/img3.png",
    },
    {
        number: 4,
        title: "Step 4: Skip the document upload step if you don't have a document to upload.",
        content: [
            { type: 'description', value: 'Next, you will see the configuration methods: interactive and auto configuration.' },
            { type: 'image', value: '/images/features/planning/img4.png' },
            { type: 'description', value: 'Auto configuration fills in all the details based on your selections, while interactive configuration allows for discussion and decision-making. This is ideal for custom-built applications.' },
        ]
    },
    {
        number: 5,
        title: "Step 5: Configure your project details.",
        description:
            "Any changes you make will be captured and considered.",
        image: "/images/features/planning/img5.png",
    },
    {
        number: 6,
        title: "Step 6: Update the key features of your project.",
        description:
            "",
    },
    {
        number: 7,
        title: "Step 7: Merge your application.",
        description:
            "After merging, you'll see the details in the project configuration panel.",
        image: "/images/features/planning/img6.png",
    },
    {
        number: 8,
        title: "Step 8: Continue with the requirements.",
        description:
            "Here, you also have the options of auto configure and interactive.",
        image: "/images/features/planning/img7.png",
    },
    {
        number: 9,
        title: "Step 9: Create the epics and stories.",
        description:
            "Epics are the first step of the creation, capturing all the epic details.",
        image: "/images/features/planning/img8.png",
    },
    {
        number: 10,
        title: "Step 10: Generate user stories one by one.",
        description:
            "You can do this for all the epics available.",
        image: "/images/features/planning/img9.png",
    },
    {
        number: 11,
        title: "Step 11: Proceed with the architecture.",
        description:
            "Along with user stories, you also have test cases.",
        image: "/images/features/planning/img10.png",
    },
    {
        number: 12,
        title: "Step 12: Complete the Architecture requirements.",
        description:
            "This is a mandatory field and divides the application into functional and non-functional requirements.",
        image: "/images/features/planning/img11.png",
    },
    {
        number: 13,
        title: "Step 13: Continue with the system architecture.",
        description:
            "This is a high-level architecture of the application.",
        image: "/images/features/planning/img12.png",
    },
    {
        number: 14,
        title: "Step 14: View the System context.",
        description:
            "This shows the architecture of the application, including external interfaces and users.",
        image: "/images/features/planning/img13.png",
    },
    {
        number: 15,
        title: "Step 15: Check out the containers that are created.",
        description:
            "",
        image: "/images/features/planning/img14.png",
    },
    {
        number: 16,
        title: "Step 16: Configure these containers as needed.",
        description:
            "",
        image: "/images/features/planning/img15.png",
    },
    {
        number: 17,
        title: "Step 17: Once the configuration is complete, continue with the components.",
        description:
            "",
    },
    {
        number: 18,
        title: "Step 18: Opt for auto configuration.",
        description:
            "",
        image: "/images/features/planning/img16.png",
    },
    {
        number: 19,
        title: "Step 19: Monitor the status panel.",
        description:
            "This shows all the details about the auto configuration that is happening currently.",
        image: "/images/features/planning/img17.png",
    },
    {
        number: 20,
        title: "Step 20: Click on auto navigate if required.",
        description:
            "",
        image: "/images/features/planning/img18.png",
    },
    {
        number: 21,
        title: "Step 21: View the list of all the containers available.",
        description:
            "The components will be created once the containers are configured.",
        image: "/images/features/planning/img19.png",
    },
    {
        number: 22,
        title: "Step 22: Start the code generation.",
        description:
            "",
        image: "/images/features/planning/img20.png",
    },
]

const recentData = [
    { name: "Code Maintenance", link: "/documentation/features/maintenance" },
    { name: "Features", link: "/documentation/features" },
]

export default function ProjectPlanning() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Project Planning", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Project Planning</h1>

            <p>
                This section walks you through creating a new project from scratch in Kavia,
                covering everything from initial setup to generating your application code.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>

                    <FeatureList features={steps as Feature[]} />

                    <p>
                        That's it! You've successfully created a new project from scratch.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}