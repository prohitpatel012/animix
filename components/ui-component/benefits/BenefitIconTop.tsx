"use client";

import { BiPalette, BiMobile, BiLayout } from "react-icons/bi";

const benefits = [
    {
        title: "Beautiful Design",
        description: "Crafted with attention to detail. Every pixel matters.",
        icon: BiPalette,
    },
    {
        title: "Mobile First",
        description: "Responsive layouts that work perfectly on any device.",
        icon: BiMobile,
    },
    {
        title: "Flexible Layouts",
        description: "Easily customizable structures to fit your unique content.",
        icon: BiLayout,
    },
];

export default function BenefitIconTop() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Design Excellence</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">We prioritize user experience above all else.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="text-center p-6">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 dark:bg-neutral-900 mb-6 group-hover:bg-indigo-100 transition-colors">
                                <benefit.icon className="h-10 w-10 text-indigo-600" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{benefit.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
