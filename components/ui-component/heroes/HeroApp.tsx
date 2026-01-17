"use client";

import { motion } from "motion/react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

export default function HeroApp() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
                >
                    <div className="flex">
                        <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-neutral-600 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 dark:text-neutral-400 dark:ring-neutral-100/10">
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">v2.0 is live</span>
                            <span className="h-4 w-px bg-neutral-900/10 dark:bg-neutral-100/10" aria-hidden="true" />
                            <a href="#" className="flex items-center gap-x-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                See what's new <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Your entire workflow, in your pocket.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Manage tasks, collaborate with your team, and track progress from anywhere. Available on iOS and Android.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                            <BiLogoApple className="text-xl" /> App Store
                        </a>
                        <a href="#" className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900">
                            <BiLogoPlayStore className="text-xl" /> Google Play
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
                >
                    <div className="relative mx-auto w-[300px] rounded-3xl shadow-2xl bg-neutral-900 border-[8px] border-neutral-900 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1470&q=80"
                            alt="Mobile app screenshot"
                            className="w-full rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
