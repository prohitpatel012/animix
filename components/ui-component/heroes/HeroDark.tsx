"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiCommand } from "react-icons/bi";

export default function HeroDark() {
    return (
        <div className="bg-neutral-950 isolate overflow-hidden relative">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#0ea5e9] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
                    v4.0 is available now
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold tracking-tight text-white sm:text-7xl bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
                >
                    Develop with <br className="hidden sm:block" /> Superpowers
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto"
                >
                    The complete toolkit for modern developers. Shippable code, instant deployments, and global edge network.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex items-center justify-center gap-x-6"
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white leading-none">
                            <BiCommand /> Clone Repo
                        </button>
                    </div>
                    <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-neutral-300 transition-colors">
                        Read Documentation <span aria-hidden="true">→</span>
                    </Link>
                </motion.div>

                <div className="mt-16 flow-root sm:mt-24">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="rounded-md bg-neutral-900/50 shadow-2xl ring-1 ring-white/10 h-[300px] flex items-center justify-center text-neutral-500 font-mono text-sm border border-neutral-800">
                        // Code Editor Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
