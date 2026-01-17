"use client";

import { BiBriefcase, BiCode, BiData, BiLayer, BiSupport, BiWorld } from "react-icons/bi";

const features = [
    {
        name: "Enterprise Management",
        description: "Tools for managing large organizations with ease.",
        icon: BiBriefcase,
    },
    {
        name: "Developer API",
        description: "Powerful API for custom integrations and extensions.",
        icon: BiCode,
    },
    {
        name: "Data Analytics",
        description: "Deep insights into your usage and performance metrics.",
        icon: BiData,
    },
    {
        name: "Global CDN",
        description: "Fast content delivery anywhere in the world.",
        icon: BiWorld,
    },
    {
        name: "UI Components",
        description: "Pre-built components to speed up development.",
        icon: BiLayer,
    },
    {
        name: "Priority Support",
        description: "Dedicated account manager and response SLAs.",
        icon: BiSupport,
    }
];

export default function FeatureListIcons() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Everything you need</h2>
                        <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            A complete suite of tools designed to help you build, launch, and scale your applications faster than ever before.
                        </p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
