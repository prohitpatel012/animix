"use client";

import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const faqs = [
    { q: "Product Specifications", a: "Dimensions: 10x10x10. Weight: 2lbs. Material: Aluminum." },
    { q: "Shipping Info", a: "We ship worldwide via FedEx and DHL. Estimated delivery 3-5 days." },
    { q: "Warranty", a: "24-month limited manufacturing warranty included." },
]

export default function AccordionMinimal() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="border-t border-black dark:border-white">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-black dark:border-white">
                            <button
                                className="flex w-full justify-between items-center py-6 text-left group"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="font-bold text-lg uppercase tracking-wider text-black dark:text-white">{faq.q}</span>
                                <BiRightArrow className={`transition-transform duration-300 ${open === i ? 'rotate-90' : ''}`} />
                            </button>
                            <div className={`text-neutral-600 dark:text-neutral-400 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
