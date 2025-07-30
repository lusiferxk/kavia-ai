'use client'

import Breadcrumb from '../../integrations/components/Breadcrumb'
import Recent from "../../components/Recent"
import FeatureList, { Feature } from '../../integrations/components/FeatureList'

const steps = [
    {
        number: 1,
        title: "Step 1: Start by clicking on ''.",
        image: '/images/features/import/img1.png',
        description:
            "",
    },
    {
        number: 2,
        title: "Step 2: Next, select the Import option.",
        image: '/images/features/import/img2.png',
        description:
            "",
    },
    {
        number: 3,
        title: "Step 3: Choose GitHub from the available options.",
        image: '/images/features/import/img3.png',
        description:
            "",
    },
    {
        number: 4,
        title: "Step 4: Wait for the Scanning... process to complete.",
        image: '/images/features/import/img4.png',
        description:
            "",
    },
    {
        number: 5,
        title: "Step 5: Enter the required information in the first field.",
        image: '/images/features/import/img5.png',
        description:
            "",
    },
    {
        number: 6,
        title: "Step 6: Proceed to the next field and input the necessary details.",
        image: '/images/features/import/img6.png',
        description:
            "",
    },
    {
        number: 7,
        title: "Step 7: Continue to the third field and type in the required information.",
        image: '/images/features/import/img7.png',
        description:
            "",
    },
    {
        number: 8,
        title: "Step 8: After filling in the details, click on the indicated area.",
        image: '/images/features/import/img8.png',
        description:
            "",
    },
    {
        number: 9,
        title: "Step 9: In the next field, enter the necessary information.",
        image: '/images/features/import/img9.png',
        description:
            "",
    },
    {
        number: 10,
        title: "Step 10: Fill in the last field with the required details.",
        image: '/images/features/import/img10.png',
        description:
            "",
    },
    {
        number: 11,
        title: "Step 11: Once you've filled out all the fields, click on the indicated area.",
        image: '/images/features/import/img11.png',
        description:
            "",
    },
    {
        number: 12,
        title: "Step 12: Choose the Make changes to existing code option.",
        image: '/images/features/import/img12.png',
        description:
            "",
    },
    {
        number: 13,
        title: "Step 13: Wait for the Importing... process to finish.",
        image: '/images/features/import/img13.png',
        description:
            "",
    },
]

const recentData = [
    { name: "Deploy", link: "/documentation/features/deploy" },
    { name: "Query", link: "/documentation/features/query" },
]

export default function Import() {

    return (
        <main className="space-y-6 text-gray-300">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/documentation/home" },
                    { label: "Features", href: "/documentation/features" },
                    { label: "Import", active: true },
                ]}
            />

            <h1 className="text-4xl sm:text-4xl font-medium text-white">Import</h1>

            <p>
                In this article, you'll learn how to import and make changes to existing code from GitHub.
                Follow these steps to achieve this.
            </p>

            <div className="shadow-2xl border border-gray-900 rounded-xl p-8 space-y-8">
                <div className='space-y-6'>
                    <FeatureList features={steps as Feature[]} />

                    <p>
                        By following these steps, you'll be able to import and modify existing code from GitHub efficiently.
                    </p>
                </div>
            </div>

            <Recent data={recentData} />
        </main>
    )
}