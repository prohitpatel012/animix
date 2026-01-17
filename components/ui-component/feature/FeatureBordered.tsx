"use client";

import { BiBarChart, BiPieChart, BiLineChart, BiStats, BiTrendingUp, BiTargetLock } from "react-icons/bi";

const features = [
    {
        name: "Real-time Analytics",
        description: "Monitor your data as it happens with sub-second latency updates on all dashboards.",
        icon: BiBarChart,
    },
    {
        name: "User Segmentation",
        description: "Group your users based on behavior, demographics, and custom properties.",
        icon: BiPieChart,
    },
    {
        name: "Funnel Analysis",
        description: "Understand where users drop off and optimize your conversion rates effectively.",
        icon: BiLineChart,
    },
    {
        name: "Retention Reports",
        description: "Track how often users return to your product over time with cohort analysis.",
        icon: BiStats,
    },
    {
        name: "Revenue Tracking",
        description: "Connect your payment provider to see real-time revenue and subscription metrics.",
        icon: BiTrendingUp,
    },
    {
        name: "Goal Setting",
        description: "Set targets for key metrics and track your progress towards them automatically.",
        icon: BiTargetLock,
    },
];

export default function FeatureBordered() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Analytics</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Data-driven decisions
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-neutral-200 dark:border-neutral-800 pt-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-neutral-900/10 dark:ring-white/10">
                                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-neutral-900 dark:text-white">{feature.name}</dt>
                            <dd className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">{feature.description}</dd>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
