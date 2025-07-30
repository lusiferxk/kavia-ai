'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList from '../../integrations/components/FeatureList'

const check = [
    {
        number: 1,
        title: "Project Overview:",
        description:
            "Even if your initial prompt was vague, Kavia enhances and refines it into a detailed project description. Review this carefully—make edits if needed to better align with your vision.",
    },
    {
        number: 2,
        title: "Core Features:",
        description:
            "Kavia automatically extracts and lists essential features for your application. Take time to read through them. You can edit, remove, or add new features directly from this section.",
    },
    {
        number: 3,
        title: "Tech Stack:",
        description:
            "Confirm that the suggested technologies (frameworks, languages, and databases) are suitable for your project. You can switch tech stacks here before development begins.",
    },
    {
        number: 4,
        title: "Page Layout & Theme:",
        description:
            "Kavia suggests an initial page layout based on your prompt. Review the structure, flow, and suggested screens, and modify them as needed. You can also change the theme and primary colors to match your brand or preferences.",
    },
    {
        number: 5,
        title: "Third-Party Integrations:",
        description:
            "The Welcome screen provides options to connect essential services like GitHub, Supabase, Stripe, and others. Be sure to connect the integrations you plan to use from the start—this ensures smooth setup and deployment down the line.",
    },
]

const promptTips = [
    {
        number: 1,
        title: "Be Specific:",
        description: "Mention exactly what page, component, or interaction you’re targeting.",
        points: ["On the /settings/profile page, add a form that lets users upload a profile picture and update their email address."]
    },
    {
        number: 2,
        title: "Use Natural Language:",
        description: "Don’t worry about code syntax. Write your requirements the same way you’d explain them to a teammate.",
        points: ["Let users choose between light and dark mode. Save their preference in local storage and apply it on every page load."]
    },
    { number: 3, title: "Add Screenshots:", description: "Upload a screenshot when describing layout bugs, spacing issues, or UI problems. This helps the AI understand what needs fixing visually." },
    {
        number: 4,
        title: "Set Guardrails:",
        description: "Tell the AI what not to touch, especially shared or working components.",
        points: ["Do not modify the AuthProvider logic in /contexts/AuthContext.tsx. Only update the login form UI."]
    },
    { number: 5, title: "Repeat Important Instructions:", description: "Reinforce key requirements across prompts if they’re critical to the feature. This ensures consistency in long or multi-step builds." },
    {
        number: 6,
        title: "Break Work into Chunks:",
        description: "Avoid combining unrelated tasks. Instead, break them into smaller prompts for better results and testing.",
        points: [
            "Build the page layout",
            "Add form fields/UI elements",
            "Connect to API or database",
            "Add input validation",
            "Test the behavior per user type"
        ]
    },
    {
        number: 7,
        title: "Clarify User Roles:",
        description: "Always mention which user type a feature is for. This is essential for role-based dashboards or permissions.",
        points: ["Only users with the role Student should see the /courses/enrolled page. Instructors should be redirected to /instructor/dashboard."]
    },
]

const editModeTips = [
    { number: 1, title: 'Change text or button labels', description: 'For example, update a button from “Submit” to “Send Request”.' },
    { number: 2, title: 'Adjust font sizes, colors, spacing', description: 'Ideal for quickly aligning visuals to your brand or improving readability.' },
    { number: 3, title: 'Tweak page layout or alignment', description: 'Make layout adjustments such as resizing containers, changing alignment, or shifting sections.' },
    { number: 4, title: 'Edit multiple elements quickly', description: 'Useful when you want to modify several components on a page in one go.' },
    { number: 5, title: 'Make safe commits without using AI credits', description: 'All edits are tracked and reversible, allowing you to test changes confidently.' },
]

const strategicTips = [
    { number: 1, title: 'Break complex tasks into smaller, logical steps. Tackle one thing at a time.', description: '' },
    { number: 2, title: 'Review results carefully and make changes incrementally.', description: '' },
    { number: 3, title: 'Don&spos;t hesitate to rephrase your prompt or retry if the result isn&spos;t quite right.', description: '' },
    { number: 4, title: 'Use the chat to confirm smaller changes before combining them into larger features.', description: '' },
]

const resources = [
    { number: 1, title: 'Use the built-in Doc Assistant to ask questions directly inside the documentation.', description: '' },
    { number: 2, title: 'Visit the [Kavia Discord Community] to share your build, ask for tips, or learn how others are using the platform.', description: '' },
    { number: 3, title: 'When your project is ready, consider showcasing it through the Kavia Launch feature to get feedback and visibility.', description: '' },
]

const recentData = [
    { name: "Tips & Tricks", link: "/documentation/tips-tricks" },
    { name: "Troubleshooting", link: "/documentation/tips-tricks/troubleshooting" },
]

export default function BestPractices() {
    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Tips & Tricks", href: "/documentation/tips-tricks" },
                    { label: "Best Practices", active: true },
                ]}
            />

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-4xl font-medium text-white">Best Practices</h1>

                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Project Welcome Screen</h2>

                        <h4 className="text-lg font-medium text-white">Why it matters:</h4>
                        <p>The Project Welcome screen is the foundation of your application in Kavia. It’s where you define the key settings and direction of your build—including core features, tech stack, layout, and integrations. Spending a few minutes reviewing this screen properly can save hours later in the development process.</p>

                        <h4 className="text-lg font-medium text-white">What to check:</h4>
                        <FeatureList features={check} />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Prompting Best Practices</h2>
                        <p>
                            Great prompts make Kavia work smarter for you. Think of the AI as your development partner—it only builds what you describe. Clear, detailed instructions help avoid bugs, save time, and get closer to your intended result.
                        </p>

                        <h4 className="text-lg font-medium text-white">Tips for Writing Effective Prompts:</h4>
                        <FeatureList features={promptTips} />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Use Edit Mode for Quick UI Fixes</h2>
                        <p>
                            Kavia’s <strong>Visual Edit Mode</strong> is the fastest way to make simple design changes without writing prompts or using AI credits. It’s especially useful for minor UI adjustments and gives you full control with undo support.
                        </p>

                        <h4 className="text-lg font-medium text-white">When to Use Edit Mode:</h4>
                        <FeatureList features={editModeTips} />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Stay Strategic</h2>
                        <p>
                            Working with Kavia’s AI can accelerate your development process dramatically—but like any powerful tool, it requires thoughtful use. Sometimes things click instantly, and other times, refining a feature takes a few tries. That’s part of the process.
                        </p>
                        <h4 className="text-lg font-medium text-white">Why it matters:</h4>
                        <p>
                            Rushing through prompts or skipping validation can lead to confusion or broken workflows later. The last steps in a project often involve the most detail-oriented adjustments—don't underestimate their importance.
                        </p>

                        <h4 className="text-lg font-medium text-white">What to keep in mind:</h4>
                        <FeatureList features={strategicTips} />

                        <p>
                            Staying calm and methodical helps you get the best results out of Kavia.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Use the Documentation and Community Resources</h2>
                        <p>
                            Kavia’s documentation isn’t just a manual—it’s your co-pilot. It’s filled with examples, setup guides, prompting strategies, integration tips, and common troubleshooting steps. Whether you're building a new feature or connecting a backend, you’ll often find answers there before needing to rephrase your prompt.
                        </p>

                        <h4 className="text-lg font-medium text-white">Where to turn:</h4>
                        <FeatureList features={resources} />

                        <p>Never feel stuck—between the docs, AI chat, and community, there’s always help available.</p>
                    </div>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}