"use client";

import { BiCheck } from "react-icons/bi";

const plans = [
    {
        name: "Starter",
        price: "$0",
        features: ["1 User", "5 Projects", "Community Support"],
        action: "Start for free"
    },
    {
        name: "Pro",
        price: "$29",
        features: ["5 Users", "Unlimited Projects", "Priority Support", "Analytics"],
        action: "Get started",
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Unlimited Users", "SSO", "Dedicated Agent", "SLA"],
        action: "Contact sales"
    }
];

export default function FeatureListCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Pricing Plans</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10 ${plan.featured ? 'scale-105 border-2 border-indigo-600 z-10' : ''}`}
                        >
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-neutral-900 dark:text-white">{plan.name}</h3>
                                <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{plan.price}</p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <BiCheck className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#"
                                className={`mt-8 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300'}`}
                            >
                                {plan.action}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
