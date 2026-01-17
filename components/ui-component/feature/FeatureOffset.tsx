"use client";

import { BiCommand, BiCodeCurly, BiTerminal } from "react-icons/bi";

const features = [
    {
        name: "Command Palette",
        description: "Access any action in seconds with our fully accessible command palette.",
        icon: BiCommand,
    },
    {
        name: "Clean API",
        description: "An intuitive API design that makes sense and is easy to learn.",
        icon: BiCodeCurly,
    },
    {
        name: "CLI Tool",
        description: "Manage your resources directly from the terminal without leaving your workflow.",
        icon: BiTerminal,
    },
];

export default function FeatureOffset() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Developer Tools</h2>
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={`flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 ${index === 1 ? 'lg:-mt-12 lg:mb-12 border-2 border-indigo-500/20' : ''}`}
                        >
                            <div className="rounded-full bg-white dark:bg-neutral-800 p-4 shadow-sm mb-6 ring-1 ring-neutral-900/5 dark:ring-white/10">
                                <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{feature.name}</h3>
                            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
