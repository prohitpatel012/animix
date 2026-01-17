"use client";

import { motion } from "motion/react";
import { BiPlayCircle } from "react-icons/bi";

export default function TestimonialVideo() {
    return (
        <section className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Customer Stories</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                See how Acme Inc. scaled their operations
                            </p>
                            <figure className="mt-10 border-l border-neutral-200 dark:border-neutral-800 pl-9">
                                <blockquote className="font-semibold text-neutral-900 dark:text-white">
                                    <p>
                                        “We were struggling with managing our data flow. This platform not only solved that but gave us insights we didn't know we were missing. It's been a game changer.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                    <img
                                        className="h-6 w-6 flex-none rounded-full bg-neutral-50"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div><span className="font-semibold text-neutral-900 dark:text-white">Tom Cook</span> – Director of Operations</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="lg:col-start-2 lg:row-start-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl bg-neutral-900 shadow-xl overflow-hidden aspect-video group cursor-pointer"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559136555-930b7e476567?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                alt="Video thumbnail"
                                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-60 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <BiPlayCircle className="h-20 w-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
