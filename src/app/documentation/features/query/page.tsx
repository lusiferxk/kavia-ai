'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList from '../../integrations/components/FeatureList'
import { NotificationPanel } from '../../integrations/components/NotificationPanel'

const steps = [
    {
        number: 1,
        title: "Step 1: Create a New Project",
        description:
            "",
        points: [
            "Go to your Project List → Click New",
            "Enter project details → Select Manual Setup",
            "Click Create to launch the project dashboard",
        ]
    },
    {
        number: 2,
        title: "Step 2: Connect Your Repository",
        description:
            "",
        points: [
            "Go to the Query tab",
            "Click Add Repository → Connect GitHub",
            "Choose a repo from the list or paste a public GitHub URL",
            "Click Import Selected and wait for the scan to complete",
        ]
    },
    {
        number: 3,
        title: "Step 3: Run a Query",
        description:
            "",
        points: [
            "Select the scanned repo",
            "Click Query → Basic Query",
            "Ask Kavia questions in natural language (e.g., “What are the security risks?”)",
        ]
    },
]

const recentData = [
    { name: "Import", link: "/documentation/features/import" },
    { name: "Code Maintentance", link: "/documentation/features/maintenance" },
]

export default function Query() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Query", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Kavia Query - Analyzing Your Existing Project</h1>

            <p>
                Kavia helps you understand and improve your existing software projects by analyzing code quality, documentation, performance, and security.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">What Kavia Can Analyze</h2>

                    <h4 className="text-lg font-semibold text-white">Code Analysis</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Reviews your code structure, language, and architecture</li>
                        <li>Maps dependencies and reusable components</li>
                        <li>Checks complexity and maintainability</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-white">Documentation</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Reviews README files and inline comments</li>
                        <li>Finds missing, outdated, or unclear documentation</li>
                        <li>Checks setup guides and API docs</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-white">Security</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Detects exposed secrets and vulnerabilities</li>
                        <li>Reviews authentication and API security</li>
                        <li>Reviews authentication and API security</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-white">Performance</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Identifies slow code and bottlenecks</li>
                        <li>Checks database queries and memory usage</li>
                        <li>Reviews caching and optimization strategies</li>
                    </ul>
                </div>

                <div className='space-y-6'>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">How to Analyze Your Project in Kavia</h2>
                    <FeatureList features={steps} />

                    <NotificationPanel message='Tip: Upload any supporting files (specs, user stories, etc.) and click Refresh to include them in your analysis.' />
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}