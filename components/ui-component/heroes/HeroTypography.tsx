"use client";

import { motion } from "motion/react";

export default function HeroTypography() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-32 lg:py-56">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <h1 className="text-6xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-8xl ">
                        SIMPLY. <br />
                        <span className="text-neutral-400 dark:text-neutral-600">BETTER.</span> <br />
                        DESIGN.
                    </h1>
                    <div className="mt-12 flex items-center justify-center gap-x-6">
                        <button className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white border-b-2 border-black dark:border-white pb-1 hover:border-transparent transition-colors">
                            Discover the Collection
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
