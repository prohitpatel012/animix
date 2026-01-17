"use client";

import { motion } from "motion/react";
import { BiSearch } from "react-icons/bi";

export default function HeroSearch() {
    return (
        <div className="relative bg-neutral-900 px-6 py-24 sm:py-32 lg:px-8 min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 -z-10 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-neutral-900" />
            </div>

            <div className="mx-auto max-w-2xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                >
                    How can we help?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-neutral-300"
                >
                    Search our documentation, tutorials, and API reference.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 relative max-w-xl mx-auto"
                >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <BiSearch className="h-6 w-6 text-neutral-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-full border-0 bg-white/10 py-4 pl-12 pr-4 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-lg sm:leading-6 backdrop-blur-md transition-all hover:bg-white/20"
                        placeholder="Search for articles, guides, or components..."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 flex justify-center gap-4 text-sm text-neutral-400"
                >
                    <span>Popular:</span>
                    <a href="#" className="hover:text-white underline decoration-neutral-600 underline-offset-4">Installation</a>
                    <a href="#" className="hover:text-white underline decoration-neutral-600 underline-offset-4">API Keys</a>
                    <a href="#" className="hover:text-white underline decoration-neutral-600 underline-offset-4">Billing</a>
                </motion.div>
            </div>
        </div>
    );
}
