import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";
import Recent from "../../components/Recent";

const recentData = [
    { name: "Build With the Chat and See the Preview", link: "/documentation/create-first-app/collaborate" },
    { name: "Deploy Your App", link: "/documentation/create-first-app/deploy" },
]

export default function EnableEdit() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/documentation/home' },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Enable edit mode', active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Enable Edit Mode</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Turn on <strong>Edit Mode</strong> to directly select and modify components in the preview without chat commands. Save your changes, and when finished, click <strong>Disable Edit Mode</strong> to continue normal work.                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/enable-edit/img1.png"
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