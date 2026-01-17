"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "How do you make holy water?",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam.",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem.",
    },
    {
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];

export default function FaqSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">FAQ</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Frequently asked questions
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl">
                    <dl className="space-y-6 divide-y divide-neutral-900/10 dark:divide-white/10">
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
            <AnimatePresence>
                {isOpen && (
                    <motion.dd
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 pr-12 overflow-hidden"
                    >
                        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 pb-2">{faq.answer}</p>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
}
