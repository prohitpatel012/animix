"use client";

import { motion } from "motion/react";
import { BiSolidStar } from "react-icons/bi";

export default function TestimonialSideBySide() {
    return (
        <section className="bg-white dark:bg-neutral-950 isolate overflow-hidden px-6 lg:px-8">
            <div className="relative mx-auto max-w-7xl pt-20 pb-20 sm:pt-32 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-0 lg:pt-0 lg:pb-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:pt-28 lg:pb-24 xl:pb-32 lg:pr-8">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl mb-10">
                        Transforming the way businesses work.
                    </h1>
                    <motion.figure
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex gap-x-1 text-indigo-600 mb-4">
                            <BiSolidStar className="h-5 w-5" />
                            <BiSolidStar className="h-5 w-5" />
                            <BiSolidStar className="h-5 w-5" />
                            <BiSolidStar className="h-5 w-5" />
                            <BiSolidStar className="h-5 w-5" />
                        </div>
                        <blockquote className="text-xl font-semibold leading-8 text-neutral-900 dark:text-white sm:text-2xl sm:leading-9">
                            <p>
                                “This app has completely changed how I manage my projects. The intuitive interface and powerful features make it a joy to use every day.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-8 flex items-center gap-x-4">
                            <img
                                className="h-10 w-10 rounded-full bg-neutral-50 object-cover"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="text-sm leading-6">
                                <div className="font-semibold text-neutral-900 dark:text-white">Joseph Rodriguez</div>
                                <div className="text-neutral-600 dark:text-neutral-400">Product Manager at TechCorp</div>
                            </div>
                        </figcaption>
                    </motion.figure>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-start-1 lg:h-full lg:flex lg:items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                        alt="Office working"
                        className="w-full rounded-2xl shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10 lg:h-[32rem] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
