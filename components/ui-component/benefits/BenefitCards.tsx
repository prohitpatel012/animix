"use client";

import { BiShield, BiRocket, BiSupport } from "react-icons/bi";

const benefits = [
    {
        title: "Secure by Default",
        description: "Enterprise-grade security baked into every layer of the platform.",
        icon: BiShield,
    },
    {
        title: "Blazing Fast",
        description: "Optimized performance ensures your users never have to wait.",
        icon: BiRocket,
    },
    {
        title: "24/7 Support",
        description: "Our dedicated team is always here to help you resolve any issues.",
        icon: BiSupport,
    },
];

export default function BenefitCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Values</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Everything you need to scale
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="flex flex-col bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 transition-shadow hover:shadow-md">
                                <div className="mb-6">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                        <benefit.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold leading-8 text-neutral-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
