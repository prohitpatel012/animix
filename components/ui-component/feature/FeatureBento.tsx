"use client";

import { motion } from "motion/react";

export default function FeatureBento() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Everything in one place.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        We've packed all the features you need into one cohesive platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {/* Large Item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-8"
                    >
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Unified Dashboard</h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-400">View all your metrics, logs, and traces in a single, customizable view.</p>
                            <div className="mt-8 h-64 w-full rounded-lg bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700"></div>
                        </div>
                    </motion.div>

                    {/* Medium Item */}
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-900 dark:bg-white p-8 lg:col-span-2">
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-purple-500/20 blur-2xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-white dark:text-neutral-900">Dark Mode Included</h3>
                            <p className="mt-2 text-neutral-300 dark:text-neutral-600">Switch between themes effortlessly.</p>
                        </div>
                    </div>

                    {/* Small Item 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 p-8"
                    >
                        <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">API First</h3>
                        <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300">Complete REST & GraphQL coverage.</p>
                    </motion.div>

                    {/* Small Item 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-2xl bg-pink-50 dark:bg-pink-900/20 p-8"
                    >
                        <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100">Real-time</h3>
                        <p className="mt-2 text-sm text-pink-700 dark:text-pink-300">Websockets enabled by default.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
