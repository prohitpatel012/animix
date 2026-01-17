"use client";

import { BiPlus } from "react-icons/bi";

export default function PricingFAQ() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-neutral-900/10 dark:divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-white">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-neutral-900/10 dark:divide-white/10">
                        {[
                            { q: "What's the best plan for me?", a: "Depends on your team size. Start small and upgrade as you grow." },
                            { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time without penalties." },
                            { q: "Do you offer discounts for non-profits?", a: "We sure do! Contact our sales team with proof of your non-profit status." },
                        ].map((faq) => (
                            <div key={faq.q} className="pt-6">
                                <dt>
                                    <button className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-white">
                                        <span className="text-base font-semibold leading-7">{faq.q}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <BiPlus className="h-6 w-6" aria-hidden="true" />
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
