import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Deploy Your App", link: "/documentation/create-first-app/deploy" },
    { name: "Describe Your App", link: "/documentation/full-stack/describe" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Full-Stack App', href: '/documentation/create-first-app' },
                    { label: "Choose App Type and Framework", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Choose App Type and Framework</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        From the Home screen, make sure <strong>Full Stack</strong> is selected under <strong>Apps and Projects</strong>. Then select <strong>Full Stack</strong> as the app type. For the frontend framework, choose <strong>React</strong>, and for the backend framework, select <strong>Express.js</strong>.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/fullstack/apptype/img1.png"
                            alt="Integration preview"
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <Recent data={recentData} />
        </div>
    )
}