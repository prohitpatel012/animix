"use client";

import { motion } from "motion/react";

export default function HeroGrid() {
    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-neutral-200 dark:stroke-neutral-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="grid-pattern"
                        width={40}
                        height={40}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 40V.5H40" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
            </svg>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl font-mono">
                        System.initialize()
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 font-mono">
                        &gt; Deploy instant serverless functions with zero configuration.<br />
                        &gt; Global edge network included.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button className="rounded-none border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                            Start Deploying
                        </button>
                        <button className="rounded-none border border-neutral-200 px-8 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900">
                            Read Docs
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
