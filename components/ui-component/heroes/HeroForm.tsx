"use client";

import { motion } from "motion/react";
import { BiEnvelope } from "react-icons/bi";

export default function HeroForm() {
    return (
        <div className="relative overflow-hidden bg-white dark:bg-neutral-950 isolate">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Get notified when we launch.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                    </p>
                    <div className="mt-10 flex max-w-md mx-auto items-center gap-x-4">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <div className="relative flex-auto">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <BiEnvelope className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                            </div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto w-full rounded-md border-0 bg-white/5 px-3.5 py-2 pl-10 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Notify me
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-neutral-500">
                        We care about your data. Read our <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">privacy&nbsp;policy</a>.
                    </p>
                </motion.div>
            </div>
            <svg
                className="absolute top-0 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
