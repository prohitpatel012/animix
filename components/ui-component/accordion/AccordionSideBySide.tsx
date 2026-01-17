"use client";

import { useState } from "react";

const faqs = [
    { q: "Getting Started", a: "Begin by creating an account and verifying your email." },
    { q: "Account Management", a: "Update your profile settings and security preferences anytime." },
    { q: "Billing & Invoices", a: "View past invoices and manage your payment methods." },
]

export default function AccordionSideBySide() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Help Center</h2>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                        Can't find what you're looking for? <a href="#" className="text-indigo-600 font-semibold underine">Contact Support</a>
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
                                <button
                                    className="text-lg font-semibold text-neutral-900 dark:text-white w-full text-left flex justify-between items-center group"
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className={`text-indigo-600 text-2xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`mt-2 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
