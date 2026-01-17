"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroCardOverlay() {
    return (
        <div className="relative bg-neutral-900">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1600&q=80"
                    alt="Office background"
                />
                <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" aria-hidden="true" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl dark:bg-neutral-950"
                >
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-500 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 dark:text-neutral-400 dark:ring-white/20 dark:hover:ring-white/30">
                            We are hiring! <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true" />See roles <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Transform your digital presence
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Leverage our cutting-edge tools to build faster, scale better, and reach more customers.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Get started
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                            Live demo <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
