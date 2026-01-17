"use client";

import { BiCheck } from "react-icons/bi";

const tiers = [
    {
        name: "Basic",
        features: ["5 Projects", "Basic Analytics", "Community Support", "1GB Storage"],
    },
    {
        name: "Pro",
        features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "10GB Storage", "Custom Domains"],
    },
    {
        name: "Enterprise",
        features: ["Unlimited Projects", "Custom Reporting", "24/7 Phone Support", "Unlimited Storage", "SSO", "SLA"],
    },
];

export default function FeatureList() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Feature Comparison</h2>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">See what you get with each tier.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {tiers.map((tier) => (
                        <div key={tier.name} className="flex flex-col">
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-4">{tier.name}</h3>
                            <ul role="list" className="space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                                        <BiCheck className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
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
