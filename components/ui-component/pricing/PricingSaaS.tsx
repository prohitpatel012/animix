"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { BiCheck } from 'react-icons/bi';


const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        price: { monthly: '$15', annually: '$144' },
        description: 'Everything necessary to get started.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        mostPopular: false,
    },
    {
        name: 'Essential',
        id: 'tier-essential',
        href: '#',
        price: { monthly: '$30', annually: '$288' },
        description: 'Everything in Basic, plus essential tools for growing your business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
        mostPopular: true,
    },
    {
        name: 'Growth',
        id: 'tier-growth',
        href: '#',
        price: { monthly: '$60', annually: '$576' },
        description: 'Everything in Essential, plus collaboration tools and deeper insights.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
            'Custom reporting tools',
        ],
        mostPopular: false,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function PricingSaaS() {
    const [frequency, setFrequency] = useState(frequencies[0]);

    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Pricing plans for teams of all sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                    Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>

                <div className="mt-16 flex justify-center">
                    <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800">
                        {frequencies.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setFrequency(option)}
                                className={classNames(
                                    frequency.value === option.value
                                        ? 'bg-indigo-600 text-white'
                                        : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                    'cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-200'
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.id}
                            whileHover={{ y: -8 }}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-neutral-200 dark:ring-neutral-700',
                                'rounded-3xl p-8 xl:p-10 bg-white dark:bg-neutral-900 relative transition-shadow hover:shadow-2xl'
                            )}
                        >
                            {tier.mostPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white">
                                    Most popular
                                </div>
                            )}
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'text-indigo-600 dark:text-indigo-400' : 'text-neutral-900 dark:text-white',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                    {frequency.value === 'monthly' ? tier.price.monthly : tier.price.annually}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 dark:text-indigo-400 dark:ring-indigo-400/30 dark:hover:ring-indigo-400/50',
                                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 xl:mt-10">
                                {tier.features.map((feature) => (
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
    );
}
