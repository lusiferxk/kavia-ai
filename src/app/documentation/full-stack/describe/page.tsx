import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import { NotificationPanel } from "../../integrations/components/NotificationPanel";
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Choose App Type and Framework", link: "/documentation/full-stack/app-type" },
    { name: "Review Project Overview", link: "/documentation/full-stack/review-overview" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Full-Stack App', href: '/documentation/create-first-app' },
                    { label: "Describe Your App", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Describe Your App</h1>
                    <p>
                        Enter your app idea in the prompt box (e.g., “create a task management system”), select the frameworks, and click the <strong>Arrow</strong> icon. Kavia will start building your app with frontend and backend code, UI layout, and logic.
                    </p>
                </div>
            </div>
            <Recent data={recentData} />
        </div>
    )
}