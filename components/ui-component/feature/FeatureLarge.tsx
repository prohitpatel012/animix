"use client";

import { BiBriefcaseAlt, BiBuildingHouse, BiCoffee } from "react-icons/bi";

const features = [
    {
        name: "Recruitment",
        description: "Find the best talent for your open roles with our AI matching.",
        icon: BiBriefcaseAlt,
        color: "bg-blue-500",
    },
    {
        name: "Office Management",
        description: "Streamline desk booking, meeting rooms, and visitor registration.",
        icon: BiBuildingHouse,
        color: "bg-orange-500",
    },
    {
        name: "Employee Perks",
        description: "Manage benefits and perks in one centralized dashboard.",
        icon: BiCoffee,
        color: "bg-green-500",
    },
];

export default function FeatureLarge() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        HR Solutions
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 pt-16 px-6 pb-24 shadow-sm sm:pt-24 sm:px-10">
                            <div className={`absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full ${feature.color} opacity-20 blur-2xl`}></div>

                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} bg-opacity-10 text-white mb-6`}>
                                <feature.icon className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{feature.name}</h3>
                            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
