"use client";

import { BiBoltCircle, BiPalette, BiShield, BiRocket, BiCodeAlt, BiLayer } from "react-icons/bi";

const features = [
    {
        name: "Lightning Fast",
        description: "Optimized for speed with zero runtime overhead and minimal bundle size impact.",
        icon: BiBoltCircle,
    },
    {
        name: "Modern Design",
        description: "Built with the latest aesthetics in mind, featuring clean lines and smooth animations.",
        icon: BiPalette,
    },
    {
        name: "Secure by Default",
        description: "Security is baked into the core, protecting your data and your users.",
        icon: BiShield,
    },
    {
        name: "Scalable Architecture",
        description: "Designed to grow with your application, from weekend side-project to enterprise.",
        icon: BiRocket,
    },
    {
        name: "Developer Experience",
        description: "Typed with TypeScript and thoroughly documented for a smooth development flow.",
        icon: BiCodeAlt,
    },
    {
        name: "Composable",
        description: "Modular components that can be composed to build complex UIs effortlessly.",
        icon: BiLayer,
    },
];

export default function FeatureSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Everything you need to build your app
                    </p>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
