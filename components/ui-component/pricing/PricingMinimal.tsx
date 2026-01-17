"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

export default function PricingMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Simple Pricing</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        $49<span className="text-lg font-medium text-neutral-500 text-neutral-400">/month</span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        One plan, one price. Everything you need to get the job done.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                            Contact sales <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div className="mt-10 pt-10 border-t border-neutral-200 dark:border-neutral-800">
                        <p className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white mb-4">What's included:</p>
                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                            {['Unlimited members', 'Unlimited feedback', 'Weekly reports', 'Advanced analysis'].map((feature) => (
                                <li key={feature} className="flex gap-x-2 items-center">
                                    <BiCheck className="h-5 w-5 text-indigo-600" /> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
