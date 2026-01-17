"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
    {
        question: "Does this support dark mode?",
        answer: "Yes, automatically detects system preference or can be toggled manually.",
    },
    {
        question: "Is it responsive?",
        answer: "Absolutely. Mobile, tablet, and desktop views are fully optimized.",
    },
    {
        question: "Can I use it in my commercial projects?",
        answer: "Yes, the license is MIT, free for personal and commercial use.",
    },
    {
        question: "What frameworks are supported?",
        answer: "React, Vue, and plain HTML implementations are available.",
    },
];

export default function FaqSided() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-white">Frequently asked questions</h2>
                        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                            Can’t find the answer you’re looking for? Reach out to our <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} faq={faq} />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Disclosure({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-white"
                >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <BiChevronDown
                            className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? "-rotate-180" : "rotate-0"}`}
                        />
                    </span>
                </button>
            </dt>
            <AnimatePresence>
                {isOpen && (
                    <motion.dd
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 pr-12 overflow-hidden"
                    >
                        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
}
