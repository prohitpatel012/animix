"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
    {
        question: "How do I get started?",
        answer: "Sign up for an account, choose a template, and start customizing your site immediately.",
    },
    {
        question: "Can I export my code?",
        answer: "Yes, you can export your project to clean HTML/CSS/JS or React code at any time.",
    },
    {
        question: "Is hosting included?",
        answer: "We offer free hosting on subdomain.custome.com, or you can connect your own domain.",
    },
];

export default function FaqOffset() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">FAQ</h2>
                        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                            Answers to common questions about our platform.
                        </p>
                    </div>
                    <div className="lg:col-span-2 mt-8 lg:mt-0">
                        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8">
                            <dl className="space-y-6">
                                {faqs.map((faq) => (
                                    <Disclosure key={faq.question} faq={faq} />
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Disclosure({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b last:border-0 border-neutral-200 dark:border-neutral-800 pb-6 last:pb-0">
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-white group"
                >
                    <span className="text-base font-semibold leading-7 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <BiChevronDown
                            className={`h-6 w-6 transform transition-transform duration-200 text-neutral-400 group-hover:text-indigo-600 ${isOpen ? "-rotate-180" : "rotate-0"}`}
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
                        className="overflow-hidden"
                    >
                        <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
}
