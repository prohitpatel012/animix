"use client";

import { BiCheckCircle } from "react-icons/bi";

const features = [
    "Reduced operational costs by up to 30%",
    "Seamless integration with existing tools",
    "Automated compliance and reporting",
    "Real-time data insights",
];

export default function BenefitImageSide() {
    return (
        <div className="overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Transform your workflow</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                A better way to work
                            </p>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Stop wasting time on manual processes. Our platform streamlines your operations, allowing you to focus on strategic growth.
                            </p>
                            <ul className="mt-10 space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <BiCheckCircle className="h-7 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10">
                            {/* Placeholder for a relevant benefit image */}
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center text-neutral-400">
                                Product Interface Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
