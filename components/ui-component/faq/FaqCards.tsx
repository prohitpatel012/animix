"use client";

import { motion } from "motion/react";

const faqs = [
    {
        question: "Integration",
        answer: "Connect with over 500+ tools through our API.",
    },
    {
        question: "Security",
        answer: "Bank-grade encryption for all your data.",
    },
    {
        question: "Analytics",
        answer: "Real-time insights into your performance.",
    },
    {
        question: "Support",
        answer: "24/7 dedicated support team access.",
    },
    {
        question: "Billing",
        answer: "Flexible monthly or annual billing options.",
    },
    {
        question: "Export",
        answer: "Export your data in any format you need.",
    },
];

export default function FaqCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Help Center
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Quick answers to your most common questions.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-y-4 rounded-xl bg-white dark:bg-neutral-950 p-6 shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10"
                        >
                            <dt className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                {faq.question}
                            </dt>
                            <dd className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {faq.answer}
                            </dd>
                            <a href="#" className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                Read more &rarr;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
