"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HeroSkewed() {
    return (
        <div className="relative bg-white dark:bg-neutral-950 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 lg:w-full lg:max-w-2xl">
                    <svg
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white dark:fill-neutral-950 lg:block"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>

                    <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
                        >
                            <div className="hidden sm:mb-10 sm:flex">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-500 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 dark:text-neutral-400 dark:ring-white/10">
                                    Start your free 14-day trial today
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                                Deploy to the edge in seconds.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                                    Get started
                                </Link>
                                <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white flex items-center">
                                    Learn more <BiRightArrowAlt className="ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
                    alt=""
                />
            </div>
        </div>
    );
}
