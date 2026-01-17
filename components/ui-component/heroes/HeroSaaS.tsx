"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSaaS() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        All-in-one platform for your team
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Streamline your operations with our integrated dashboard. Real-time analytics, team management, and secure data storage all in one place.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Start 14-day free trial
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                            Live demo <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80"
                        alt="App screenshot"
                        width={2432}
                        height={1442}
                        className="rounded-md shadow-2xl ring-1 ring-neutral-900/10 dark:ring-white/10"
                    />
                </motion.div>
            </div>
        </div>
    );
}
