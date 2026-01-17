"use client";

import { BiRightArrowAlt } from "react-icons/bi";

const features = [
    {
        title: "Integration",
        description: "Connect with your favorite tools."
    },
    {
        title: "Analytics",
        description: "Track your performance in real-time."
    },
    {
        title: "Automation",
        description: "Set up workflows to save time."
    },
    {
        title: "Security",
        description: "Enterprise-grade protection for your data."
    },
    {
        title: "Support",
        description: "24/7 assistance from our experts."
    }
];

export default function FeatureListRows() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Core Features</h2>
                </div>
                <div className="mx-auto max-w-4xl divide-y divide-neutral-900/10 dark:divide-white/10 border-t border-b border-neutral-900/10 dark:border-white/10">
                    {features.map((feature) => (
                        <div key={feature.title} className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 px-4 -mx-4 rounded-lg transition-colors cursor-pointer">
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-neutral-900 dark:text-white">{feature.title}</h3>
                                <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                            </div>
                            <div className="flex-none self-start sm:self-center">
                                <BiRightArrowAlt className="h-6 w-6 text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
