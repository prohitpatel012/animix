"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const testimonials = [
    {
        content: "The level of customization is unmatched. I was able to build exactly what I imagined without fighting the framework.",
        author: "Sarah Jenkins",
        role: "Frontend Architect"
    },
    {
        content: "Performance is critical for our e-commerce site. This library helped us achieve a perfect 100 on Lighthouse scores.",
        author: "David Chen",
        role: "CTO at ShopFlow"
    },
    {
        content: "The accessibility features are built-in, not an afterthought. This saved us weeks of audit time.",
        author: "Emily Watson",
        role: "Accessibility Advocate"
    }
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <AnimatePresence mode="wait">
                        <motion.figure
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <blockquote className="text-2xl font-semibold leading-9 text-neutral-900 dark:text-white sm:text-3xl sm:leading-10">
                                <p>“{testimonials[index].content}”</p>
                            </blockquote>
                            <figcaption className="mt-10">
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-neutral-900 dark:text-white">{testimonials[index].author}</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-neutral-900 dark:fill-white">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="text-neutral-600 dark:text-neutral-400">{testimonials[index].role}</div>
                                </div>
                            </figcaption>
                        </motion.figure>
                    </AnimatePresence>

                    <div className="mt-10 flex justify-center gap-4">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition"
                            aria-label="Previous testimonial"
                        >
                            <BiChevronLeft className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition"
                            aria-label="Next testimonial"
                        >
                            <BiChevronRight className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
