"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
    {
        question: "What is included in the Pro plan?",
        answer: "The Pro plan includes all features of the Basic plan, plus advanced analytics, priority support, and unlimited projects.",
    },
    {
        question: "Do you offer enterprise solutions?",
        answer: "Yes, we offer custom enterprise solutions tailored to your specific needs. Contact our sales team for more information.",
    },
    {
        question: "Can I use my own domain?",
        answer: "Yes, you can connect your own custom domain on all paid plans.",
    },
    {
        question: "Is there a setup fee?",
        answer: "No, there are no setup fees or hidden charges. You only pay the advertised monthly or annual price.",
    },
];

export default function FaqDark() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Support</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to know
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-3xl divide-y divide-white/10">
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
        <div className="py-6">
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left text-white"
                >
                    <span className="text-lg font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <BiChevronDown
                            className={`h-6 w-6 transform transition-transform duration-200 text-indigo-400 ${isOpen ? "-rotate-180" : "rotate-0"}`}
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
                        <p className="text-base leading-7 text-neutral-400">{faq.answer}</p>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
}
