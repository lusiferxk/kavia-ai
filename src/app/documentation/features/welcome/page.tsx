'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import Image from 'next/image'

const recentData = [
    { name: "Features", link: "/documentation/features" },
    { name: "Attach Files", link: "/documentation/features/attach" },
]

export default function Welcome() {
    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Project Welcome Screen", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Project Welcome Screen</h1>

            <p>
                The Project Welcome Screen is a powerful feature in Kavia that acts as a launchpad for your entire application.
                Immediately after entering a prompt, Kavia generates a complete and editable project setup—allowing you to review and refine every key aspect before starting implementation.
                This ensures that even a basic or unclear prompt results in a structured, production-ready foundation.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Project Overview & Core Features</h2>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/features/welcome/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>
                            Kavia automatically generates a clear summary of your application based on the prompt you provide.
                            This overview helps you validate the direction of the project.
                            If needed, you can make quick adjustments using the Edit option to better align it with your goals.
                        </li>
                        <li>
                            Based on your prompt, Kavia breaks down your app into a list of core features.
                            These are fully editable—you can add, remove, or modify them according to your specific requirements.
                            Finalizing this feature list ensures the app is built with precision and in line with your expectations.
                        </li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Stack, Style & Layout</h2>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/features/welcome/img2.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <p>
                        This section allows you to customize the technology stack by choosing frameworks, libraries, and databases.
                        Kavia provides a smart default configuration, but you can tailor it to fit your project.
                        You can also define the app’s primary colors, theme, and page layout to match your design vision or brand guidelines.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Third-Party Integrations & Start Implementation</h2>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/features/welcome/img3.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <p>
                        Here, you can connect services such as GitHub, Supabase, Stripe, and others.
                        If your desired account isn’t listed, use the Add Account button to link it.
                        Once all setup details are reviewed and confirmed, clicking Start Implementation begins the actual build process in Kavia.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}