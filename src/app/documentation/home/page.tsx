'use client'

import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import SearchBar from '../components/SearchBar'

interface ResourceCard {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    active?: boolean
}

const resources: ResourceCard[] = [
    {
        title: 'Build your first App',
        description: 'Step-by-step guide to build and deploy your first app with Kavia.',
        icon: <img src="/images/dochome/img1.png" alt="App Icon" className="w-10" />,
        href: '/documentation/create-first-app',
        // active: true,
    },
    {
        title: 'Features',
        description: 'Explore Kavia’s core features and capabilities.',
        icon: <img src="/images/dochome/img2.png" alt="Features Icon" className="w-10" />,
        href: '/documentation/features',
    },
    {
        title: 'Integrations',
        description: 'Connect third-party tools to enhance your workflow.',
        icon: <img src="/images/dochome/img3.png" alt="Integrations Icon" className="w-10" />,
        href: '/documentation/integrations-v2',
    },
    {
        title: 'Query',
        description: 'Analyze your project easily.',
        icon: <img src="/images/dochome/img4.png" alt="Query Icon" className="w-10" />,
        href: '/documentation/features/query',
    },
    {
        title: 'Tips & Tricks',
        description: 'Discover shortcuts and expert tips to work faster.',
        icon: <img src="/images/dochome/img5.png" alt="Tips Icon" className="w-10" />,
        href: '/documentation/tips-tricks',
    },
    {
        title: 'Prompt Engineering',
        description: 'Craft better prompts for smarter AI output.',
        icon: <img src="/images/dochome/img6.png" alt="Prompt Icon" className="w-10" />,
        href: '/documentation/prompt-engineering',
    },
    {
        title: 'FAQ',
        description: 'Explore real-world projects built with Kavia.',
        icon: <img src="/images/dochome/img7.png" alt="FAQ Icon" className="w-10" />,
        href: '/documentation/faq',
    },
    {
        title: 'Kavia Credits',
        description: 'Manage credits for building and deploying apps.',
        icon: <img src="/images/dochome/img8.png" alt="Tips Icon" className="w-10" />,
        href: '/documentation/credit',
    },
    {
        title: 'Community',
        description: 'Join the Kavia community to collaborate and grow.',
        icon: <img src="/images/dochome/img9.png" alt="Prompt Icon" className="w-10" />,
        href: '/prompt-engineering',
    },
]

export default function HomePage() {
    return (
        <div className="min-h-screen pb-10 text-white">
            <div className="w-full flex flex-col items-center text-center">
                <div className='w-5xl mb-5'>
                    <h2 className="text-4xl font-medium text-white mb-2">Resource Center</h2>
                    <p className="text-gray-300 mb-5">
                        Dive into KAVIA with our starter videos, articles, and tutorials.
                    </p>

                    <SearchBar />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resources.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className='group relative flex flex-col justify-between h-72 p-5 rounded-2xl border border-[#2a2a2a] text-left overflow-hidden'
                            style={{ backgroundColor: '#231f20' }}
                            onMouseMove={(e) => {
                                const target = e.currentTarget as HTMLElement;
                                const rect = target.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                target.style.setProperty('--x', `${x}px`);
                                target.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            {/* Glow effect */}
                            <div className="pointer-events-none absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,123,0,0.25),transparent_65%)] before:transition-opacity before:duration-500 group-hover:before:opacity-100 before:opacity-0 z-0" />

                            {/* Main Content */}
                            <div className="relative z-10 flex flex-col flex-grow">
                                {item.icon}
                                <h3 className="text-xl font-medium text-white mt-4">{item.title}</h3>
                                <p className="text-sm text-gray-300 mt-3">{item.description}</p>
                            </div>

                            {/* Fixed Bottom Arrow */}
                            <div className="absolute bottom-5 left-5 z-10">
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full ${item.active ? 'bg-orange-500' : 'bg-[#333]'
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
    )
}
