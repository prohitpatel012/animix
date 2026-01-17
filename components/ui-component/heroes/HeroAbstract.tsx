"use client";

import { motion } from "motion/react";

export default function HeroAbstract() {
    return (
        <div className="bg-white dark:bg-black overflow-hidden relative isolate">
            <div className="absolute top-0 right-0 -z-10 w-[50%] h-full bg-linear-to-bl from-indigo-100 via-white to-white dark:from-indigo-950 dark:via-black dark:to-black opacity-50 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:flex lg:items-center lg:gap-x-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
                >
                    <div className="flex items-center gap-x-6">
                        <div className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 dark:text-indigo-400 dark:ring-indigo-400/30">
                            Beta Access
                        </div>
                    </div>
                    <h1 className="mt-10 text-6xl font-black tracking-tighter text-neutral-900 dark:text-white sm:text-8xl">
                        BUILD<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">FUTURE.</span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-neutral-600 dark:text-neutral-400">
                        The next generation of web development tools is here. Ship faster, scale better, and deploy anywhere.
                    </p>
                    <div className="mt-14 flex items-center gap-x-6">
                        <button className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                            Join Waitlist
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1364&q=80"
                        alt="Abstract 3D Shape"
                        className="w-[40rem] max-w-full drop-shadow-2xl rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </div>
    );
}
