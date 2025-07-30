import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Enable Edit Mode", link: "/documentation/create-first-app/enable-edit-mode" },
    { name: "Choose App Type and Frameworks", link: "/documentation/full-stack/app-type" },
]

export default function Deploy() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/documentation/home' },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Deploy Your First App', active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Deploy Your First App</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Click the <strong>+</strong> button next to <strong>Deploy</strong>, select your container from the dropdown (for multi-container projects, all will appear). Then configure settings and click <strong>Create Frontend Deployment</strong>. Kavia will deploy your app automatically.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/deploy/img1.png"
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