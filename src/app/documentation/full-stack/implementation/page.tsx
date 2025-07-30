import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";
import FeatureList from "../../integrations/components/FeatureList";

const implementation = [
    {
        number: 1,
        title: "Left side: A chat panel where Kavia communicates with you.",
        description: ""
    },
    {
        number: 2,
        title: "Right side: A VS Code-style editor where your application code is generated and organized and preview of the application.",
        description: ""
    },
    {
        number: 3,
        title: "In full Stack applications only difference is you get two previews for the front end and backend API.",
        description: ""
    },
]

const recentData = [
    { name: "Review Project Overview", link: "/documentation/full-stack/review-overview" },
    { name: "Use the Chat to Collaborate", link: "/documentation/create-first-app/collaborate" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Full-Stack App', href: '/documentation/create-first-app' },
                    { label: "Start Implementation", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Start Implementation and Workspace Setup</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Click <strong>Start Implementation</strong> to let Kavia prepare your coding workspace. This may take a moment. When ready, the interface will appear for you to begin working.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/implementation/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <FeatureList features={implementation} />

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/implementation/img2.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/implementation/img3.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                    <p>
                        From here onwards you can follow starting from the <strong>Step 5</strong> of the <strong>Web based App</strong>.
                    </p>
                </div>
            </div>
            <Recent data={recentData} />
        </div>
    )
}