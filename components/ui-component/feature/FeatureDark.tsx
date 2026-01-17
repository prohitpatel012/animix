"use client";

import { BiBrain, BiChip, BiNetworkChart, BiBot, BiAtom, BiCodeBlock } from "react-icons/bi";

const features = [
    {
        name: "Neural Networks",
        description: "Advanced deep learning models tailored for your specific use cases.",
        icon: BiBrain,
    },
    {
        name: "Edge Processing",
        description: "Run AI closer to your users for lightning-fast inference times.",
        icon: BiChip,
    },
    {
        name: "Distributed Learning",
        description: "Train models across thousands of nodes simultaneously.",
        icon: BiNetworkChart,
    },
    {
        name: "AutoML",
        description: "Automatically select the best algorithms for your data.",
        icon: BiBot,
    },
    {
        name: "Quantum Ready",
        description: "Algorithms prepared for the next generation of computing.",
        icon: BiAtom,
    },
    {
        name: "Code Generation",
        description: "Turn natural language into production-ready code.",
        icon: BiCodeBlock,
    },
];

export default function FeatureDark() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Artificial Intelligence</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Next-gen capabilities
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Harness the power of AI to transform your business operations and unlock new value.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-inset ring-indigo-500/20">
                                        <feature.icon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
