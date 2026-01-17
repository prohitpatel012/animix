"use client";

import { motion } from "motion/react";

export default function TestimonialSimple() {
    return (
        <section className="bg-white dark:bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Testimonials</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                    What our users say
                </h2>
            </div>
            <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 mx-auto max-w-2xl text-center"
            >
                <p className="text-xl font-semibold leading-8 text-neutral-900 dark:text-white sm:text-2xl sm:leading-9">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
                <figcaption className="mt-10">
                    <img
                        className="mx-auto h-20 w-20 rounded-full bg-neutral-100 object-cover"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                        alt=""
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-neutral-900 dark:text-white">Judith Black</div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-neutral-900 dark:fill-white">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="text-neutral-600 dark:text-neutral-400">CEO of Workcation</div>
                    </div>
                </figcaption>
            </motion.figure>
        </section>
    );
}
