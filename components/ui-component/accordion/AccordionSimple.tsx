"use client";

import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
    { q: "How does the free trial work?", a: "You get 14 days of full access to all features. No credit card required." },
    { q: "Can I switch plans later?", a: "Absoultely. You can upgrade or downgrade your plan at any time." },
    { q: "Is my data secure?", a: "We use bank-level encryption and strictly adhere to GDPR regulations." },
]

export default function AccordionSimple() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
                            <button
                                className="flex w-full justify-between items-center text-left font-medium text-neutral-900 dark:text-white"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span>{faq.q}</span>
                                {open === i ? <BiMinus className="shrink-0 ml-4" /> : <BiPlus className="shrink-0 ml-4" />}
                            </button>
                            <div className={`mt-2 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
