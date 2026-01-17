"use client";

import { useState } from "react";
import { BiChevronsDown } from "react-icons/bi";

const faqs = [
    { q: "Why dark mode?", a: "It reduces eye strain and saves battery life on OLED screens." },
    { q: "Is it default?", a: "It respects your system preference automatically." },
    { q: "Can I toggle it?", a: "Yes, there is a switch in the navigation bar." },
]

export default function AccordionDark() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="bg-neutral-900 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="divide-y divide-neutral-800">
                    {faqs.map((faq, i) => (
                        <div key={i} className="py-6">
                            <button
                                className="flex w-full justify-between items-start text-left group"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className={`text-lg font-medium transition-colors ${open === i ? 'text-indigo-400' : 'text-white group-hover:text-neutral-200'}`}>
                                    {faq.q}
                                </span>
                                <BiChevronsDown className={`w-6 h-6 text-neutral-500 transition-transform duration-300 ${open === i ? 'rotate-180 text-indigo-400' : ''}`} />
                            </button>
                            <div className={`mt-4 text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
