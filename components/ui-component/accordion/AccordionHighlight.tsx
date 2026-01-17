"use client";

import { useState } from "react";

const faqs = [
    { id: '01', q: "Design", a: "We start with comprehensive wireframing and prototyping." },
    { id: '02', q: "Development", a: "Agile methodologies ensure constant feedback and iteration." },
    { id: '03', q: "Deployment", a: "CI/CD pipelines automate delivery to production environments." },
]

export default function AccordionHighlight() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`rounded-xl p-6 transition-all duration-300 cursor-pointer ${open === i ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                        onClick={() => setOpen(i)}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`text-sm font-mono opacity-50 ${open === i ? 'text-white' : 'text-neutral-500'}`}>{faq.id}</span>
                            <h3 className="font-bold text-lg">{faq.q}</h3>
                        </div>
                        <div className={`ml-8 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className={open === i ? 'text-indigo-100' : 'text-neutral-600'}>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
