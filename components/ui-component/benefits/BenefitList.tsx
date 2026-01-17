"use client";

import { BiCheck } from "react-icons/bi";

const tiers = [
    {
        name: "Standard",
        benefits: [
            "Basic Analytics",
            "5 Projects",
            "2 Team Members",
            "Community Support"
        ]
    },
    {
        name: "Premium",
        benefits: [
            "Advanced Analytics",
            "Unlimited Projects",
            "10 Team Members",
            "Priority Support",
            "Custom Domain"
        ]
    }
]

export default function BenefitList() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Plan Comparison</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Choose the right set of features for your team.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {tiers.map((tier) => (
                        <div key={tier.name} className="flex flex-col justify-center p-8 bg-white dark:bg-neutral-950 rounded-3xl shadow-sm ring-1 ring-neutral-900/10 dark:ring-white/10">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">{tier.name} Benefits</h3>
                            <ul role="list" className="space-y-4">
                                {tier.benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-x-3 items-center">
                                        <BiCheck className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        <span className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
