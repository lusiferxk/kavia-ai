import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import { NotificationPanel } from "../../integrations/components/NotificationPanel";
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Choose App Type and Framework", link: "/documentation/create-first-app/app-type" },
    { name: "Review Project Overview", link: "/documentation/create-first-app/review-overview" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Web App', href: '/documentation/create-first-app' },
                    { label: "Describe Your App", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Describe Your App</h1>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <p className="text-gray-300 leading-relaxed">
                            Enter your app idea in the prompt box. For example:
                        </p>
                        <p className="text-gray-300 leading-relaxed">

                        </p>
                        <NotificationPanel message="Create a modern, responsive personal portfolio website for a freelance architect. The site should include the following sections: Home, About Me, Projects, Skills, Contact. Each section should be accessible via a navigation bar. The Projects section should display 3 sample projects with images, titles, and short descriptions. The Contact section should include a form with fields for Name, Email, Subject, and Message. Style the site with a clean, minimal design using modern fonts and subtle animations. Make it mobile-friendly and accessible." />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Then select Web as the type, and select the framework which suitable for the project scope, and click the Arrow icon to proceed.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Kavia will automatically start building your app with the layout, UI, and code.
                    </p>
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/describe/img1.png"
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