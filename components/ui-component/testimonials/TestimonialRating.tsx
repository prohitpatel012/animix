"use client";

import { motion } from "motion/react";
import { BiSolidStar } from "react-icons/bi";

export default function TestimonialRating() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Loved by users worldwide</h2>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="flex flex-col justify-between bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl"
                            >
                                <div>
                                    <div className="flex gap-1 text-yellow-400 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <BiSolidStar key={i} className="h-5 w-5" />
                                        ))}
                                    </div>
                                    <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">"Absolutely fantastic!"</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-7">
                                        "I've tried many similar tools but this one stands out. The attention to detail and user experience is second to none."
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-x-4">
                                    <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                                    <div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">Alex Johnson</div>
                                        <div className="text-sm text-neutral-500">Creative Director</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
