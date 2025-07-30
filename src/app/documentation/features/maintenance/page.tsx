'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList, { Feature } from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Step 1: Begin by ingesting your code base into Cavia AI.",
        image: '/images/features/maintenance/img1.png',
        description:
            "",
    },
    {
        number: 2,
        title: "Step 2: Navigate to the code panel.",
        image: '/images/features/maintenance/img2.png',
        description:
            "",
    },
    {
        number: 3,
        title: "Step 3: Click on Start new session.",
        image: '/images/features/maintenance/img3.png',
        description:
            "",
    },
    {
        number: 4,
        title: "Step 4: You'll see two options:",
        content: [
            { type: 'points', value: ["Code generation", "code maintenance."] },
            { type: 'description', value: 'Choose code maintenance for modifying your existing code base.' },
        ]
    },
    {
        number: 5,
        title: "Step 5: Select the repository you wish to modify and click on Start new session.",
        image: '/images/features/maintenance/img4.png',
        description:
            "",
    },
    {
        number: 6,
        title: "Step 6: Once the session starts, you'll see the progress of the operation.",
        image: '/images/features/maintenance/img5.png',
        description:
            "For instance, if you've given an input to write inline documentation, you'll see the operation in progress and the details of file modifications.",
    },
    {
        number: 7,
        title: "Step 7: You can add features, write documentation, fix errors, or add error handling functionality. ",
        description:
            "Once these changes are complete, commit and push the code. It's recommended to start a new branch and proceed.",
    },
    {
        number: 8,
        title: "Step 8: Provide a commit message and push the changes to maintain your updates.",
        image: '/images/features/maintenance/img6.png',
        description:
            "",
    },
    {
        number: 9,
        title: "Step 9: Create a new branch by selecting create new branch.",
        image: '/images/features/maintenance/img7.png',
        description:
            "",
    },
    {
        number: 10,
        title: "Step 10: Give your new branch a name.",
        image: '/images/features/maintenance/img8.png',
        description:
            "",
    },
    {
        number: 11,
        title: "Step 11: If you wish to work on multiple sessions in parallel, let the session run in the background. ",
        content: [
            { type: 'description', value: 'Give your session a name and start a new session.' },
            { type: 'image', value: '/images/features/maintenance/img9.png' },
            { type: 'description', value: 'Remember, each new session starts fresh and does not continue from the previous one. This way, you can have multiple sessions running simultaneously.' },
            { type: 'image', value: '/images/features/maintenance/img10.png' },
        ]
    },
]

const recentData = [
    { name: "Query", link: "/documentation/features/query" },
    { name: "Project Planning", link: "/documentation/features/planning" },
]

export default function CodeMaintenance() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Code Maintenance", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Code Maintenance</h1>

            <p>
                This guide will show you how to maintain and update your existing codebase using Kavia AI’s Code Maintenance feature,
                enabling seamless edits, refactoring, and optimization.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>

                    <FeatureList features={steps as Feature[]} />

                    <p>
                        Thank you for following this tutorial on code maintenance with Cavia AI.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}