"use client";

import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";

const tiers = [
    {
        name: 'Developer',
        id: 'tier-developer',
        href: '#',
        priceMonthly: '$29',
        description: 'Perfect for side projects and hobbies.',
        features: ['Unlimited public projects', '5 private projects', 'Community support', 'API Access'],
        featured: false,
    },
    {
        name: 'Team',
        id: 'tier-team',
        href: '#',
        priceMonthly: '$99',
        description: 'Collaborate with your team with advanced permissions.',
        features: [
            'Unlimited public projects',
            'Unlimited private projects',
            'Priority email support',
            'API Access',
            'Team permissions',
            'Audit logs',
        ],
        featured: true,
    },
    {
        name: 'Custom',
        id: 'tier-custom',
        href: '#',
        priceMonthly: '$299',
        description: 'Dedicated infrastructure for your scale.',
        features: [
            'Everything in Team',
            'SSO',
            'Dedicated support agent',
            'SLA',
            'On-premise deployment option',
        ],
        featured: false,
    },
];

export default function PricingDark() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-emerald-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Plans for every stage of your growth
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-400">
                    Transparent pricing. No hidden costs. Designed for developers.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.id}
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-3xl p-8 ring-1 xl:p-10 ${tier.featured
                                    ? 'bg-neutral-900 ring-emerald-500 shadow-2xl shadow-emerald-900/20'
                                    : 'bg-black ring-neutral-800'
                                }`}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                {tier.featured && (
                                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-400">
                                        Most popular
                                    </span>
                                )}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-neutral-400">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                                <span className="text-sm font-semibold leading-6 text-neutral-400">/month</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured
                                        ? 'bg-emerald-500 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline-emerald-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                                    }`}
                            >
                                Subscribe
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <BiCheck className="h-6 w-5 flex-none text-emerald-400" aria-hidden="true" />
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
