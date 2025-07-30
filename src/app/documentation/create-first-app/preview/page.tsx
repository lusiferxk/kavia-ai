import Breadcrumb from "@/app/documentation/integrations/components/Breadcrumb"
import Image from "next/image";

import Recent from "../../components/Recent";

const recentData = [
    { name: "Use the Chat to Collaborate", link: "/documentation/create-first-app/collaborate" },
    { name: "Enable Edit Mode", link: "/documentation/create-first-app/enable-edit-mode" },
]

export default function StepOne() {
    return (
        <div className="space-y-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: 'Build your first App', href: '/documentation/create-first-app' },
                    { label: 'Web App', href: '/documentation/create-first-app' },
                    { label: "Preview", active: true },
                ]}
            />

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-medium text-white">Preview</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        To preview the app you're building, simply click the Preview button located at the top-left corner of the right panel. This will open a live preview of your application so you can see the current state of your build.
                    </p>
                </div>
                <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                    <div className="relative p-1 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src="/images/preview/img1.png"
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