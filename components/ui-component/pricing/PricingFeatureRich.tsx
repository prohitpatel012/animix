"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

const plans = [
    {
        name: 'Standard',
        price: '$50',
        description: 'For small projects',
        features: ['5 Users', '10GB Storage', 'Basic Support']
    },
    {
        name: 'Pro',
        price: '$100',
        description: 'For growing teams',
        features: ['20 Users', '50GB Storage', 'Priority Support', 'Access to API']
    },
    {
        name: 'Ultra',
        price: '$200',
        description: 'For large scale needs',
        features: ['Unlimited Users', '1TB Storage', '24/7 Support', 'Access to API', 'Custom Integrations']
    }
];

export default function PricingFeatureRich() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Feature-rich plans</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-950 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
                        >
                            <div className="p-8 bg-neutral-50 dark:bg-white/5 border-b border-neutral-200 dark:border-neutral-800">
                                <h3 className="text-lg font-semibold leading-8 text-neutral-900 dark:text-white">{plan.name}</h3>
                                <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{plan.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{plan.price}</span>
                                    <span className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">/mo</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="flex-1 p-8">
                                <ul role="list" className="space-y-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <BiCheck className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
