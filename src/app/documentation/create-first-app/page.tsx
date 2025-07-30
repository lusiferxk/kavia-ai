'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Breadcrumb from '../integrations/components/Breadcrumb'
import { useState } from 'react'
import Recent from '../components/Recent'

const panelOne = [
    { title: 'Choose App Type and Framework', href: '/documentation/create-first-app/app-type', active: true },
    { title: 'Describe Your App', href: '/documentation/create-first-app/describe' },
    { title: 'Review Project Overview', href: '/documentation/create-first-app/review-overview' },
    { title: 'Start Implementation and Workspace Setup', href: '/documentation/create-first-app/implementation' },
    { title: 'Build With the Chat and See the Preview', href: '/documentation/create-first-app/collaborate' },
    { title: 'Enable Edit Mode', href: '/documentation/create-first-app/enable-edit-mode' },
    { title: 'Deploy Your App', href: '/documentation/create-first-app/deploy' },
]

const panelTwo = [
    { title: 'Choose App Type and Frameworks', href: '/documentation/full-stack/app-type' },
    { title: 'Describe Your App', href: '/documentation/full-stack/describe' },
    { title: 'Review Project Overview', href: '/documentation/full-stack/review-overview' },
    { title: 'Start Implementation and Setup Workspace', href: '/documentation/full-stack/implementation' },
]

const recentData = [
    { name: "Choose App Type and Framework", link: "/documentation/create-first-app/app-type" },
    { name: "Describe Your App", link: "/documentation/create-first-app/describe" },
]

function Panel({ title, steps }: { title: string; steps: typeof panelOne }) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <div className="rounded-xl border border-[#2a2a2a] bg-[#231f20] text-white overflow-hidden mb-6">
            <div className="px-5 py-3 border-b border-[#302c2d] text-lg text-gray-300" style={{ backgroundColor: '#302c2d' }}>
                <h1 className="text-xl sm:text-2xl font-medium text-white">
                    {title}
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-3">
                {steps.map((step, index) => {
                    const isActive = index === hoverIndex;

                    return (
                        <Link
                            key={index}
                            href={step.href}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={`flex justify-between items-center px-4 py-3 rounded-xl transition-all text-gray-300 ${isActive ? 'bg-[#302c2d]' : 'hover:bg-[#302c2d]'
                                }`}
                        >
                            <span>{step.title}</span>
                            <div
                                className={`flex items-center rounded-full p-1 ${isActive ? 'bg-[#f97316]' : 'bg-gray-500/20'
                                    }`}
                            >
                                <ArrowUpRight size={14} className="shrink-0 text-white" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default function CreateFirstAppPage() {
    return (
        <div className="min-h-screen w-full text-white">

            <Breadcrumb
                items={[
                    { label: 'Home', href: '/documentation/home' },
                    { label: 'Build your first App', active: true },
                ]}
            />

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-medium text-white my-6 text-center sm:text-left">Build your first App</h1>
            <p className="text-gray-300 mb-10 text-center sm:text-left">
                Kavia is an AI-powered Workflow Manager that streamlines the entire software development lifecycle—from planning and design to deployment and monitoring.
            </p>

            {/* Panels */}
            <Panel title="Web App" steps={panelOne} />
            <Panel title="Full-Stack App" steps={panelTwo} />

            <Recent data={recentData} />
        </div>
    )
}
