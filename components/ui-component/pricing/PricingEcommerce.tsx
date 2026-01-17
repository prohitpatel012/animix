"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

const licenses = [
    {
        name: 'Standard License',
        id: 'license-standard',
        price: '$59',
        description: 'Use for a single personal or commercial project.',
        features: ['Single project use', 'Lifetime updates', '6 months support'],
    },
    {
        name: 'Extended License',
        id: 'license-extended',
        price: '$299',
        description: 'Use for unlimited personal or commercial projects.',
        features: ['Unlimited projects', 'Lifetime updates', '12 months support', 'Use in client work'],
    },
];

export default function PricingEcommerce() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Buy once, use forever</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Choose the right license for you
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {licenses.map((license) => (
                            <motion.div
                                key={license.id}
                                whileHover={{ y: -5 }}
                                className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-8 xl:p-10"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{license.name}</h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400 min-h-[48px]">
                                    {license.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{license.price}</span>
                                    <span className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">USD</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-6 block w-full rounded-md bg-neutral-900 dark:bg-white px-3 py-2 text-center text-sm font-semibold text-white dark:text-neutral-900 shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200"
                                >
                                    Add to cart
                                </a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    {license.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <BiCheck className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
