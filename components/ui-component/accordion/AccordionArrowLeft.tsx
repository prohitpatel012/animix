"use client";

import { useState } from "react";

const faqs = [
    { q: "Integration", a: "Integrates with Slack, Discord, and Teams out of the box." },
    { q: "Security", a: "SOC2 Type II certified and GDPR compliant." },
    { q: "Performance", a: "99.99% uptime SLA guaranteed for enterprise customers." },
]

export default function AccordionArrowLeft() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg border-neutral-200 dark:border-neutral-800">
                            <button
                                className="flex w-full items-center p-4 text-left gap-3"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <svg
                                    className={`w-4 h-4 text-neutral-500 transform transition-transform duration-200 ${open === i ? 'rotate-90' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="font-semibold text-neutral-900 dark:text-white">{faq.q}</span>
                            </button>
                            <div className={`pl-11 pr-4 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
