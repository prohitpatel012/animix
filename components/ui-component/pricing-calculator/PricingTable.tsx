"use client";

import { BiCheck, BiMinus } from "react-icons/bi";

const features = [
    { name: 'Integrations', basic: true, essential: true, premium: true },
    { name: 'Analytics', basic: true, essential: true, premium: true },
    { name: 'Support', basic: 'Email', essential: 'Email & Chat', premium: '24/7 Phone' },
    { name: 'SLA', basic: false, essential: true, premium: true },
    { name: 'Custom Reports', basic: false, essential: false, premium: true },
]

export default function PricingTable() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl text-center mb-16">Feature Comparison</h2>

                <div className="relative overflow-x-auto rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                    <table className="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
                        <thead className="bg-neutral-50 dark:bg-neutral-900 text-xs uppercase text-neutral-900 dark:text-white">
                            <tr>
                                <th scope="col" className="px-6 py-4">Feature</th>
                                <th scope="col" className="px-6 py-4">Basic</th>
                                <th scope="col" className="px-6 py-4">Essential</th>
                                <th scope="col" className="px-6 py-4">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                            {features.map((feature) => (
                                <tr key={feature.name} className="bg-white dark:bg-neutral-950">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap">
                                        {feature.name}
                                    </th>
                                    {[feature.basic, feature.essential, feature.premium].map((val, i) => (
                                        <td key={i} className="px-6 py-4">
                                            {val === true ? (
                                                <BiCheck className="w-5 h-5 text-green-600 mx-auto lg:mx-0" />
                                            ) : val === false ? (
                                                <BiMinus className="w-5 h-5 text-neutral-300 mx-auto lg:mx-0" />
                                            ) : (
                                                <span className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800">{String(val)}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
