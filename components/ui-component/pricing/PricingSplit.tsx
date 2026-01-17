"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

const features = [
    'Unlimited projects',
    'Unlimited users',
    '10GB storage',
    'Priority support',
    'Analytics dashboard',
    'Custom domain',
];

export default function PricingSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Everything you need</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                All-in-one platform
                            </p>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 dark:text-neutral-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature} className="relative pl-9">
                                        <dt className="inline font-semibold text-neutral-900 dark:text-white">
                                            <BiCheck className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                        </dt>
                                        <dd className="inline">{feature}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center rounded-3xl bg-neutral-900 p-8 shadow-2xl ring-1 ring-neutral-900/10 dark:bg-neutral-800 sm:p-10"
                    >
                        <h3 className="text-2xl font-bold tracking-tight text-white">Lifetime Access</h3>
                        <p className="mt-4 text-base text-neutral-300 text-center">
                            Pay once, own it forever. No monthly subscriptions.
                        </p>
                        <div className="mt-6 flex items-baseline gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-white">$299</span>
                            <span className="text-base font-semibold leading-7 text-neutral-300">USD</span>
                        </div>
                        <a
                            href="#"
                            className="mt-8 block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Get access
                        </a>
                        <p className="mt-4 text-xs leading-5 text-neutral-400">
                            Invoices and receipts available for easy company reimbursement.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
