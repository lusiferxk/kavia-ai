"use client"

import Breadcrumb from "../integrations/components/Breadcrumb"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

export default function FeaturesPage() {
    const [selected, setSelected] = useState<null | 'github' | 'supabase' | 'api'>(null)

    const cards = [
        { key: 'welcome', title: 'Project Welcome Screen', path: 'welcome', description: 'Configure your project essentials.' },
        { key: 'attach', title: 'Attach Files', path: 'attach', description: 'Upload images or documents easily.' },
        { key: 'figma', title: 'Figma to Kavia', path: 'figma', description: 'Convert Figma designs into code.' },
        { key: 'generate', title: 'Code Generation', path: 'code-generation', description: 'Generate code instantly with AI.' },
        { key: 'code-editor', title: 'Code Editor', path: 'code-editor', description: 'Edit code using VS Code interface.' },
        { key: 'edit', title: 'Edit Mode', path: 'edit', description: 'Make quick visual UI edits.' },
        { key: 'deploy', title: 'Deploy', path: 'deploy', description: 'Publish your app with one click.' },
        { key: 'import', title: 'Import', path: 'import', description: 'Bring existing projects into Kavia.' },
        { key: 'query', title: 'Query', path: 'query', description: 'Analyze code with AI queries.' },
        { key: 'maintenance', title: 'Code Maintenance', path: 'maintenance', description: 'Update and improve existing code.' },
        { key: 'planning', title: 'Project Planning', path: 'planning', description: 'Plan features and app structure efficiently.' },
    ]

    return (
        <div className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Features</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Kavia provides a powerful, AI-driven environment to plan, build, and scale software projects from idea to deployment.
                        Whether you're a solo founder, startup team, or enterprise developer, Kavia streamlines every phase of the product lifecycle—from initial prompts to production-ready code.
                    </p>
                </div>

                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <p>
                        Below is a comprehensive list of features available in Kavia.
                        Click on any feature to learn more about how it works and how to use it effectively.Project Welcome Screen
                    </p>
                    <div className="space-y-12">
                        {/* Selector Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map((card) => (
                                <Link
                                    href={`/documentation/features/${card.path}`}
                                    key={card.key}
                                    onClick={() => setSelected(card.key as any)}
                                    className='group relative flex flex-col justify-between h-40 p-5 rounded-2xl border border-[#2a2a2a] text-left overflow-hidden transition-all'
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
                                    <div className="relative z-10 space-y-2">
                                        <h3 className="text-xl font-medium text-white">{card.title}</h3>
                                        <p className="text-sm text-gray-400 leading-snug">{card.description}</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
