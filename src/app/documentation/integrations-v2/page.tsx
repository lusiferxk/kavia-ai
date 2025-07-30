"use client"

import Image from "next/image"
import Breadcrumb from "../integrations/components/Breadcrumb"
import { NotificationPanel } from "../integrations/components/NotificationPanel"
import FeatureList from "../integrations/components/FeatureList"
import { PlayCircle } from "lucide-react"
import WhatsNextPanel from "../integrations/components/WhatsNextPanel"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

const bestPractices = [
    {
        number: 1,
        title: "Define your integration requirements early (e.g., auth, storage, payments)",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 2,
        title: "Use verified integrations when possible for faster setup",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 3,
        title: "Store API credentials securely—Kavia supports environment variables",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 4,
        title: "Document endpoints and response structures within your workspace",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
    {
        number: 5,
        title: "Use prompting to generate reusable integration patterns or wrappers",
        description:
            "Supabase integration is ideal for projects that require full-stack functionality but prefer a serverless or low-maintenance backend solution.",
    },
]

export default function IntegrationsPage() {


    const [selected, setSelected] = useState<null | 'github' | 'supabase' | 'api'>(null)

    const cards = [
        {
            key: 'github',
            title: 'GitHub Integration',
            description: 'Speed up repo creation, branching, and commit flows automatically.',
            path: 'github-integration',
        },
        {
            key: 'supabase',
            title: 'Supabase Integration',
            description: 'Serverless-ready native DB and auth integration with Supabase.',
            path: 'supabase-integration',
        },
        {
            key: 'api',
            title: 'Custom API Integration',
            description: 'Connect to any external API through prompt or code access.',
            path: 'api-integration',
        },
    ]

    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Integrations", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Integrations in Kavia</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Kavia supports seamless integrations that extend the functionality of your web and mobile applications.
                        Whether you're adding authentication, databases, storage, or third-party services, Kavia provides both
                        native and custom integration options to fit your project needs.
                    </p>
                </div>

                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/quickstart/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="flex items-center gap-2 bg-white text-gray-800 font-medium text-sm px-4 py-3 rounded-full shadow-2xl hover:bg-[#fff5f0] hover:text-[#f97316] transition-all duration-200">
                                <PlayCircle className="w-6 h-6" />
                                <span className='hover:underline'>Play Video</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-medium text-white">Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Integrations allow you to enhance your application by connecting it to external systems and APIs. Kavia
                            makes this process straightforward through pre-configured native integrations and flexible support for
                            third-party APIs.
                        </p>
                        <h4 className="text-lg font-semibold text-white">With Kavia, you can:</h4>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Connect your project to version control systems like GitHub</li>
                            <li>Add robust backend capabilities using platforms such as Supabase</li>
                            <li>
                                Integrate third-party APIs for specific use cases such as payments, email delivery, geolocation, or
                                analytics
                            </li>
                        </ul>
                        <NotificationPanel message="Integrations allow you to enhance your application by connecting it to external systems and APIs. Kavia makes this process straightforward through pre-configured native integrations and flexible support for third-party APIs." />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-medium text-white">Understanding APIs</h2>
                        <p className="text-gray-300 leading-relaxed">
                            An API (Application Programming Interface) is a standardized way for different software systems to
                            communicate. APIs expose functionality—such as retrieving data, sending notifications, or processing
                            transactions—that your application can use without having to build those services from scratch.
                        </p>
                        <h4 className="text-lg font-semibold text-white">Examples of API-driven integrations include:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Sending transactional emails via SendGrid</li>
                            <li>Processing payments through Stripe</li>
                            <li>Storing files on Amazon S3</li>
                            <li>Authenticating users with OAuth providers like Google or GitHub</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">
                            Kavia enables you to work with these APIs easily by generating or integrating the required code, handling
                            authentication flows, and managing data exchanges.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-medium text-white">Native Integrations</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Kavia includes native support for popular platforms that are commonly used in modern application
                            development. These integrations are designed for speed, reliability, and low-configuration setup.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Selector Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map((card) => (
                                <Link
                                    href={`/documentation/integrations/${card.path}`}
                                    key={card.key}
                                    onClick={() => setSelected(card.key as any)}
                                    className='group relative flex flex-col justify-between h-64 p-5 rounded-2xl border border-[#2a2a2a] text-left overflow-hidden transition-all'
                                    style={{ backgroundColor: '#231f20' }}
                                    onMouseMove={(e) => {
                                        const target = e.currentTarget as HTMLElement
                                        const rect = target.getBoundingClientRect()
                                        const x = e.clientX - rect.left
                                        const y = e.clientY - rect.top
                                        target.style.setProperty('--x', `${x}px`)
                                        target.style.setProperty('--y', `${y}px`)
                                    }}
                                >
                                    {/* Glow effect */}
                                    <div className="pointer-events-none absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,123,0,0.25),transparent_65%)] before:transition-opacity before:duration-500 group-hover:before:opacity-100 before:opacity-0 z-0" />

                                    {/* Main Content */}
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        <h3 className="text-xl font-medium text-white">{card.title}</h3>
                                        <p className="text-sm text-gray-300 mt-3">{card.description}</p>
                                    </div>

                                    {/* Fixed Bottom Arrow */}
                                    <div className="absolute bottom-5 left-5 z-10">
                                        <div
                                            className={`w-8 h-8 flex items-center justify-center rounded-full ${selected === card.key ? 'bg-orange-500' : 'bg-[#333]'
                                                } group-hover:bg-orange-500 transition-all`}
                                        >
                                            <ArrowUpRight size={14} className="text-white" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-medium text-white">Best Practices</h2>
                            <h4 className="text-white text-lg font-semibold">To get the most out of integrations in Kavia:</h4>
                            <FeatureList features={bestPractices} />
                        </div>
                    </div>

                    <WhatsNextPanel />
                </div>
            </div>
        </div>
    )
}
