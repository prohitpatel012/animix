"use client";

import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
    {
        question: "How does the free trial work?",
        answer: "You get 14 days of full access to all features. No credit card required.",
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes, there is no long-term contract. You can cancel your subscription at any time.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
];

export default function FaqWithSummary() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Frequently asked questions</h2>
                        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">sending us an email</a> and we’ll get back to you as soon as we can.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <dl className="space-y-6 divide-y divide-neutral-900/10 dark:divide-white/10">
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
        <div className="pt-6">
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-white"
                >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        {isOpen ? (
                            <BiMinus className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <BiPlus className="h-6 w-6" aria-hidden="true" />
                        )}
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                </dd>
            )}
        </div>
    );
}
