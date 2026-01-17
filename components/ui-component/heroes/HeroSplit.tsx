"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";

export default function HeroSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="relative isolate overflow-hidden">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-neutral-200 dark:stroke-neutral-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>

                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 lg:shrink-0"
                    >
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20">
                                    Latest updates
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-400">
                                    <span>Just shipped v1.0</span>
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                            Deploy to the cloud with confidence
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Get started
                            </Link>
                            <Link href="#" className="flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                                <BiPlayCircle className="text-xl" /> Watch demo
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
                    >
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&h=600&q=80"
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
