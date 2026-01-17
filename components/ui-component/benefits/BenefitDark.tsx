"use client";

import { BiLockAlt, BiServer, BiGlobe } from "react-icons/bi";

const benefits = [
    {
        name: 'Enterprise Security',
        description: 'Bank-grade encryption and SOC2 compliance keep your data safe.',
        icon: BiLockAlt,
    },
    {
        name: 'Reliable Infrastructure',
        description: '99.99% uptime SLA ensures your business never stops running.',
        icon: BiServer,
    },
    {
        name: 'Global CDN',
        description: 'Low latency access for users anywhere on the planet.',
        icon: BiGlobe,
    },
]

export default function BenefitDark() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay ahead of the competition</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-300">
                        Leverage cutting-edge technology to outperform your rivals. Speed, security, and scalability are built-in features, not paid add-ons.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-white flex items-center gap-2">
                                    <benefit.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                    {benefit.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-400">
                                    <p className="flex-auto">{benefit.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
