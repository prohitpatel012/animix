"use client";

import { motion } from "motion/react";
import { BiCheck, BiX } from "react-icons/bi";

const features = [
    { name: "SSO (Single Sign-On)", starter: false, pro: true, enterprise: true },
    { name: "Audit Logs", starter: false, pro: true, enterprise: true },
    { name: "24/7 Priority Support", starter: false, pro: false, enterprise: true },
    { name: "Advanced Role Management", starter: false, pro: true, enterprise: true },
    { name: "Custom Contracts", starter: false, pro: false, enterprise: true },
    { name: "Unlimited API Access", starter: true, pro: true, enterprise: true },
    { name: "Data Retention", starter: "30 Days", pro: "1 Year", enterprise: "Unlimited" },
];

const tiers = [
    {
        name: "Starter",
        id: "starter",
        href: "#",
        priceMonthly: "$0",
        description: "For individuals and small teams.",
    },
    {
        name: "Pro",
        id: "pro",
        href: "#",
        priceMonthly: "$49",
        description: "For growing companies who need scale.",
    },
    {
        name: "Enterprise",
        id: "enterprise",
        href: "#",
        priceMonthly: "Custom",
        description: "For large organizations with specific needs.",
    },
];

export default function PricingEnterprise() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Compare plans</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Find the perfect plan for your business needs. Upgrade or downgrade at any time.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mt-16 flow-root mt-20">
                    <div className="isolate -mx-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 px-6 py-10 sm:mx-0 sm:p-14 lg:p-20 border border-neutral-200 dark:border-neutral-800">
                        <table className="w-full text-left border-collapse">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-2/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <td className="p-0 pb-4"></td>
                                    {tiers.map((tier) => (
                                        <th key={tier.id} scope="col" className="p-0 pb-4 text-sm font-semibold leading-6 text-neutral-900 dark:text-white text-center">
                                            {tier.name}
                                            <div className="font-normal text-neutral-500 dark:text-neutral-400 mt-1">{tier.priceMonthly}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800">
                                {features.map((feature) => (
                                    <tr key={feature.name}>
                                        <th scope="row" className="py-4 text-sm font-normal text-neutral-600 dark:text-neutral-300">
                                            {feature.name}
                                        </th>
                                        <td className="py-4 text-center">
                                            {feature.starter === true ? (
                                                <BiCheck className="mx-auto h-5 w-5 text-indigo-600" />
                                            ) : feature.starter === false ? (
                                                <BiX className="mx-auto h-5 w-5 text-neutral-400" />
                                            ) : (
                                                <span className="text-sm text-neutral-500">{feature.starter}</span>
                                            )}
                                        </td>
                                        <td className="py-4 text-center">
                                            {feature.pro === true ? (
                                                <BiCheck className="mx-auto h-5 w-5 text-indigo-600" />
                                            ) : feature.pro === false ? (
                                                <BiX className="mx-auto h-5 w-5 text-neutral-400" />
                                            ) : (
                                                <span className="text-sm text-neutral-500">{feature.pro}</span>
                                            )}
                                        </td>
                                        <td className="py-4 text-center">
                                            {feature.enterprise === true ? (
                                                <BiCheck className="mx-auto h-5 w-5 text-indigo-600" />
                                            ) : feature.enterprise === false ? (
                                                <BiX className="mx-auto h-5 w-5 text-neutral-400" />
                                            ) : (
                                                <span className="text-sm text-neutral-500">{feature.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {tiers.map((tier) => (
                                <div key={tier.id} className="text-center">
                                    <a
                                        href={tier.href}
                                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {tier.name === 'Enterprise' ? 'Contact Sales' : `Get ${tier.name}`}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
