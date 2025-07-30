'use client'

import DocumentationGradientBackground from "../../GradientBackground"

export default function HeroSection() {
    return (
        <section className="rounded-3xl w-full sm:px-24 px-10 pt-10 pb-20 flex justify-center items-center">
            <div
                className="group relative w-full mx-auto rounded-3xl bg-black/60 backdrop-blur-lg border border-[#2e2e2e] px-8 py-28 text-center overflow-hidden"
                onMouseMove={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    target.style.setProperty('--x', `${x}px`);
                    target.style.setProperty('--y', `${y}px`);
                }}
            >
                <div className="pointer-events-none absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,123,0,0.25),transparent_50%)] before:transition-opacity before:duration-500 group-hover:before:opacity-100 before:opacity-0 z-0" />

                <h1 className="text-white text-4xl md:text-5xl font-medium mb-4">
                    Inspect. Plan. Build.
                </h1>
                <p className="text-gray-300 mb-8">
                    Transform Enterprise Software Development Process with KAVIA AI
                </p>
                <button className="bg-[#f97316] hover:bg-[#fb923c] transition text-white text-sm px-6 py-3 rounded-xl shadow-md">
                    Get started with KAVIA AI
                </button>
            </div>
        </section>
    )
}