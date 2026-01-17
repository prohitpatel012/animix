"use client";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const categories = [
    {
        name: "General",
        items: [
            { q: "What is this tool?", a: "A comprehensive UI library." },
            { q: "Is it free?", a: "The core components are MIT licensed." }
        ]
    },
    {
        name: "Technical",
        items: [
            { q: "Which framework?", a: "Built for React and Next.js." },
            { q: "Does it use functionality?", a: "Yes, it relies on client-side state for interactions." }
        ]
    }
]

export default function AccordionGrouped() {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                {categories.map((cat, catIdx) => (
                    <div key={cat.name} className="mb-8">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">{cat.name}</h3>
                        <div className="space-y-3">
                            {cat.items.map((item, itemIdx) => {
                                const key = `${catIdx}-${itemIdx}`;
                                const isOpen = open === key;
                                return (
                                    <div key={item.q} className="bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                                        <button
                                            className="flex w-full justify-between items-center p-4 text-left"
                                            onClick={() => setOpen(isOpen ? null : key)}
                                        >
                                            <span className="font-medium text-neutral-700 dark:text-neutral-200">{item.q}</span>
                                            <BiPlus className={`transition-transform duration-300 text-neutral-500 ${isOpen ? 'rotate-45' : ''}`} />
                                        </button>
                                        <div className={`px-4 text-sm text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {item.a}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
