'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList, { Feature } from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Step 1: Understand the Code Generation Agent",
        description:
            "The Kavia code generation agent is currently based on the GPT 4.1 model. It assists with code creation and other project-related tasks.",
    },
    {
        number: 2,
        title: "Step 2: Change the Model",
        content: [
            { type: 'description', value: 'To change the model, click on the panel shown in the following screenshot.' },
            { type: 'image', value: '/images/features/generation/img1.png' },
            { type: 'description', value: 'You will find a wide selection of models to choose from.' },
        ]
    },
    {
        number: 3,
        title: "Step 3: Use the Chat Panel",
        image: '/images/features/generation/img2.png',
        description:
            "In the Chat panel, shown below, you're able to request the agent to write documents, code, or assist with other tasks.",
    },
    {
        number: 4,
        title: "Step 4: Add References",
        description:
            "If you need to add references, click the plus button to attach files.",
    },
    {
        number: 5,
        title: "Step 5: Navigate the Tabs",
        content: [
            { type: 'description', value: 'On the right side, there are three tabs: Code, Documents, and Preview. The Code tab, shown below, is where you access your code.' },
            { type: 'image', value: '/images/features/generation/img3.png' },
            { type: 'description', value: 'The Documents tab, shown below, assists with documentation.' },
            { type: 'image', value: '/images/features/generation/img4.png' },
            { type: 'description', value: 'The Preview tab, shown below, allows you to preview your app.' },
            { type: 'image', value: '/images/features/generation/img5.png' },
        ]
    },
    {
        number: 6,
        title: "Step 6: Use the Preview Tab",
        description:
            "In the Preview tab, you can open the preview in a new tab, refresh the container, or copy the URL by clicking the corresponding buttons.",
    },
    {
        number: 7,
        title: "Step 7: Fix Your Code",
        image: '/images/features/generation/img6.png',
        description:
            "If your code needs fixing, tell the chat agent. It'll fix any issues for you.",
    },
    {
        number: 8,
        title: "Step 8: Terminate the Session",
        image: '/images/features/generation/img7.png',
        description:
            "When you're done, terminate the session by clicking the X button.",
    },
    {
        number: 9,
        title: "Step 9: Name and Choose Session Options",
        content: [
            { type: 'description', value: 'Name your session in the provided box.' },
            { type: 'image', value: '/images/features/generation/img8.png' },
            { type: 'description', value: 'You have three options: continue the session, discard the session and exit, or save the session and exit. Continuing the session allows you to resume it anytime. Discarding the session means your work will not be saved. Saving and exiting stops the session but saves your work.' },
        ]
    },
]

const recentData = [
    { name: "Figma to Kavia", link: "/documentation/features/figma" },
    { name: "Code Editor", link: "/documentation/features/code-editor" },
]

export default function CodeGeneration() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Code Generation", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Code Generation</h1>

            <p>
                This guide explains how to use Kavia’s AI-powered Code Generation Agent to build and manage your application,
                generate code, and handle project-related tasks efficiently.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>

                    <FeatureList features={steps as Feature[]} />
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}