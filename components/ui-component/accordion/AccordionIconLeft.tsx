"use client";

import { useState } from "react";

const faqs = [
    { q: "What functionality does the API offer?", a: "Our API allows full programmatic access to read and write data to your account." },
    { q: "Is there a usage limit?", a: "Yes, depending on your plan tier. See pricing for details." },
    { q: "Where can I find the documentation?", a: "Developer docs are available at docs.example.com." },
]

export default function AccordionIconLeft() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                {faqs.map((faq, i) => (
                    <div key={i} className="mb-4">
                        <button
                            className="flex w-full items-center text-left gap-4 p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className={`flex items-center justify-center w-6 h-6 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors ${open === i ? 'bg-indigo-600 !text-white' : ''}`}>
                                {open === i ? '-' : '+'}
                            </div>
                            <span className="font-semibold text-neutral-900 dark:text-white">{faq.q}</span>
                        </button>
                        <div className={`pl-14 pr-4 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
