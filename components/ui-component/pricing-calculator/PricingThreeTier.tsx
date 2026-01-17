"use client";

import { BiCheck } from "react-icons/bi";

export default function PricingThreeTier() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Pricing that grows with you</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Check out our affordable plans to get started.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-3">
                    {[
                        { name: 'Hobby', price: '$29', desc: 'For individuals and small projects.' },
                        { name: 'Pro', price: '$79', desc: 'For growing teams and startups.', featured: true },
                        { name: 'Enterprise', price: '$199', desc: 'For large scale deployments.' },
                    ].map((tier, tierIdx) => (
                        <div
                            key={tierIdx}
                            className={`
                    flex flex-col justify-between rounded-3xl p-8 ring-1 ring-neutral-200 dark:ring-neutral-800 xl:p-10
                    ${tier.featured ? 'bg-neutral-900 text-white shadow-xl scale-105 z-10 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white'}
                `}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 className={`text-lg font-semibold leading-8 ${tier.featured ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{tier.name}</h3>
                                </div>
                                <p className={`mt-4 text-sm leading-6 ${tier.featured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'}`}>{tier.desc}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className={`text-4xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{tier.price}</span>
                                    <span className={`text-sm font-semibold leading-6 ${tier.featured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'}`}>/month</span>
                                </p>
                                <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'}`}>
                                    {[1, 2, 3, 4].map((f) => (
                                        <li key={f} className="flex gap-x-3">
                                            <BiCheck className={`h-6 w-5 flex-none ${tier.featured ? 'text-white' : 'text-indigo-600'}`} aria-hidden="true" />
                                            Feature number {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#"
                                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured
                                        ? 'bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:outline-white'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                                    }`}
                            >
                                Buy plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
