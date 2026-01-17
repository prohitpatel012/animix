"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        id: 1,
        question: "How secure is my data?",
        answer: "We use banking-grade 256-bit SSL encryption. Your data is backed up daily and stored in secure data centers.",
    },
    {
        id: 2,
        question: "Can I invite my team?",
        answer: "Yes, you can invite unlimited team members. Roles and permissions can be customized for each member.",
    },
    {
        id: 3,
        question: "Do you have an API?",
        answer: "Yes, we offer a comprehensive REST API. You can find full documentation in our developer portal.",
    },
    {
        id: 4,
        question: "What happens if I go over my limit?",
        answer: "We will notify you when you are close to your limit. You can upgrade your plan or pay for overages.",
    }
];

export default function FaqOpened() {
    // Default the first item to be open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Knowledge Base</h2>
                </div>
                <div className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-neutral-950 p-2 shadow-xl">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="mb-1 last:mb-0">
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className={`flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors rounded-xl ${index === openIndex
                                        ? "bg-indigo-50 text-indigo-900 dark:bg-indigo-900/20 dark:text-indigo-100"
                                        : "text-neutral-900 hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900"
                                    }`}
                            >
                                <span>{faq.question}</span>
                                <span className={`ml-4 text-2xl transition-transform ${index === openIndex ? "rotate-45" : ""}`}>+</span>
                            </button>
                            <AnimatePresence initial={false}>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 text-neutral-600 dark:text-neutral-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
