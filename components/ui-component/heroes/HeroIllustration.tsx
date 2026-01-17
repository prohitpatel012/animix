"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HeroIllustration() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
                >
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Data analytics for <span className="text-indigo-600">everyone.</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Powerful, self-serve product analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Start Free Trial
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white flex items-center">
                            View Demo <BiRightArrowAlt className="ml-1" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
                >
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                        alt="Analytics Illustration"
                        className="mx-auto w-[40rem] max-w-full drop-shadow-xl rounded-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
}
