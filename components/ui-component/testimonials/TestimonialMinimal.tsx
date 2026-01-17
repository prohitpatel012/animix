"use client";

import { motion } from "motion/react";

export default function TestimonialMinimal() {
    return (
        <section className="bg-white dark:bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
            <motion.figure
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto max-w-4xl"
            >
                <blockquote className="text-center font-serif text-3xl italic leading-10 text-neutral-900 dark:text-white sm:text-5xl sm:leading-[1.2]">
                    <p>
                        “Design is not just what it looks like and feels like. Design is how it works. This library understands that perfectly.”
                    </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                    <div className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white tracking-widest uppercase">
                        Steve Jobs (Inspired)
                    </div>
                </figcaption>
            </motion.figure>
        </section>
    );
}
