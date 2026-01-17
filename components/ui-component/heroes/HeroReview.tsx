"use client";

import { motion } from "motion/react";
import { BiSolidStar } from "react-icons/bi";

export default function HeroReview() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="flex justify-center gap-1 mb-6 text-yellow-400 text-2xl">
                        <BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        "The best tool we've used in years."
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 italic">
                        — Sarah Johnson, CTO at TechCorp
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <p className="text-sm text-neutral-500">
                            Join 10,000+ happy developers shipping code faster.
                        </p>
                    </div>
                    <div className="mt-6">
                        <button className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Start your success story
                        </button>
                    </div>
                </motion.div>
                <div className="mt-16 flow-root sm:mt-24">
                    <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80"
                            alt="Team collaboration"
                            className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full object-cover h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
