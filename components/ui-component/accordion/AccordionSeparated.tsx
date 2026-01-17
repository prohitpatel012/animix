"use client";

import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
    { q: "Installation Guide", a: "Simply run 'npm install package-name' to get started." },
    { q: "License Key", a: "You can find your license key in your account dashboard under settings." },
    { q: "Typography", a: "We use Inter as the default font family, but it is fully customizable." },
]

export default function AccordionSeparated() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                        <button
                            className="flex w-full justify-between items-center p-5 text-left"
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <span className="font-medium text-neutral-900 dark:text-white">{faq.q}</span>
                            <div className={`p-1 rounded-full ${open === i ? 'bg-indigo-100 text-indigo-600' : 'bg-neutral-100 text-neutral-500'}`}>
                                {open === i ? <BiMinus /> : <BiPlus />}
                            </div>
                        </button>
                        <div className={`px-5 text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
