"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
    { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee for all new subscriptions." },
    { q: "Do you offer technical support?", a: "Yes, 24/7 support is included in all paid plans." },
    { q: "Can I use my own domain?", a: "Custom domains are available on the Pro and Enterprise plans." },
]

export default function AccordionBordered() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden divide-y divide-neutral-200 dark:divide-neutral-800">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white dark:bg-neutral-950">
                            <button
                                className="flex w-full justify-between items-center p-6 text-left"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="font-semibold text-neutral-900 dark:text-white">{faq.q}</span>
                                <BiChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
