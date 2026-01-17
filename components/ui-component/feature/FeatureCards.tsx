"use client";

import { motion } from "motion/react";
import { BiServer, BiData, BiLock, BiGlobe } from "react-icons/bi";

const features = [
    {
        title: "Global CDN",
        description: "Content delivered at the edge for lowest latency.",
        icon: BiGlobe,
    },
    {
        title: "Database Backup",
        description: "Automated daily backups with point-in-time recovery.",
        icon: BiData,
    },
    {
        title: "DDoS Protection",
        description: "Enterprise-grade mitigation against all attack vectors.",
        icon: BiLock,
    },
    {
        title: "Serverless Compute",
        description: "Scale to zero when idle, millions of requests when busy.",
        icon: BiServer,
    },
];

export default function FeatureCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Powerful Infrastructure
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Built on top of a rock-solid foundation to ensure 99.99% uptime.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            whileHover={{ y: -5 }}
                            className="flex flex-col justify-between rounded-xl bg-white dark:bg-neutral-950 p-6 shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10"
                        >
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
