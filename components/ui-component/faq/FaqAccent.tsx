"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiRightArrowAlt } from "react-icons/bi";

const faqs = [
    {
        question: "How fast is the setup?",
        answer: "You can be up and running in less than 5 minutes. Our onboarding wizard guides you through the entire process.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 chat support, email support, and a comprehensive knowledge base with video tutorials.",
    },
    {
        question: "Is my credit card information secure?",
        answer: "Yes, we use Stripe for payment processing. We never store your credit card information on our servers.",
    },
];

export default function FaqAccent() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl text-center mb-12">
                    Q&A
                </h2>
                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((faq) => (
                        <Disclosure key={faq.question} faq={faq} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Disclosure({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`overflow-hidden rounded-lg border transition-all duration-300 ${isOpen ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/10 dark:border-indigo-500' : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
                <span className={`text-base font-semibold leading-7 ${isOpen ? 'text-indigo-700 dark:text-indigo-400' : 'text-neutral-900 dark:text-white'}`}>
                    {faq.question}
                </span>
                <BiRightArrowAlt
                    className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-90 text-indigo-600' : 'text-neutral-400'}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-6 pb-5">
                            <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
