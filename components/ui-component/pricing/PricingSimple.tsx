"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    },
    {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$49',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$89',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Custom reporting',
            '1-hour, dedicated support response time',
            'Marketing automations',
        ],
    },
];

export default function PricingSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Simple, transparent pricing</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Choose the plan that suits your needs. No hidden fees, cancel at any time.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {tiers.map((tier) => (
                            <motion.div
                                key={tier.id}
                                whileHover={{ y: -5 }}
                                className="flex flex-col justify-between rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10 sm:p-10"
                            >
                                <div>
                                    <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                                        {tier.name}
                                    </h3>
                                    <div className="mt-4 flex items-baseline gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">{tier.priceMonthly}</span>
                                        <span className="text-base font-semibold leading-7 text-neutral-600 dark:text-neutral-400">/month</span>
                                    </div>
                                    <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                        {tier.description}
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <BiCheck className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
