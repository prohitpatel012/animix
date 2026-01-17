"use client";

import { motion } from "motion/react";

export default function TestimonialCompany() {
    return (
        <section className="bg-indigo-700 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mx-auto w-full max-w-xl lg:mx-0"
                    >
                        <img
                            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                            alt="Workcation"
                            className="h-12 w-auto mb-10"
                        />
                        <figure>
                            <blockquote className="text-2xl font-bold tracking-tight text-white sm:text-3xl sm:leading-10">
                                <p>
                                    “We used to spend weeks building internal tools. Now we do it in an afternoon. It's not just faster, it's better code.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex gap-x-4 items-center">
                                <img
                                    className="h-10 w-10 rounded-full bg-indigo-800"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base text-indigo-100">
                                    <div className="font-semibold text-white">Judith Black</div>
                                    <div className="mt-1">CEO of Workcation</div>
                                </div>
                            </figcaption>
                        </figure>
                    </motion.div>
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <div className="flex flex-wrap gap-x-8 gap-y-10 justify-start lg:justify-end opacity-70">
                            {/* Placeholder logos */}
                            <div className="text-white font-bold text-xl">ACME</div>
                            <div className="text-white font-bold text-xl">Tuple</div>
                            <div className="text-white font-bold text-xl">SavvyCat</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
