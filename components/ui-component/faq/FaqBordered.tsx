"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can manage your subscription settings in your dashboard account at any time.",
    },
    {
        question: "Is there a limit on team members?",
        answer: "No, we do not limit the number of team members you can add to your account.",
    },
    {
        question: "Do you provide invoices?",
        answer: "Yes, automated invoices are sent to your email address every month.",
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee for all new subscriptions.",
    }
];

export default function FaqBordered() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Common Questions</h2>
                </div>
                <div className="mx-auto max-w-3xl">
                    <dl className="space-y-4">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} faq={faq} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

function Disclosure({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-200 rounded-lg dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left px-6 py-4 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
                >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        {isOpen ? (
                            <BiMinus className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                        ) : (
                            <BiPlus className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                        )}
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
                        <div className="px-6 pb-6 pt-2">
                            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
}
