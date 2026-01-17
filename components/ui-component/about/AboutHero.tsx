"use client";

import { motion } from "motion/react";

export default function AboutHero() {
    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),black)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-neutral-950 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
                    >
                        We’re changing the way people connect.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400"
                    >
                        Animix is a global team of creators, thinkers, and builders. We believe in the power of technology to bridge gaps and create meaningful experiences. Our journey began in a garage, but our vision has always been boundless.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-neutral-900 dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Offices worldwide', value: '12' },
                            { name: 'Full-time colleagues', value: '300+' },
                            { name: 'Hours per week', value: '40' },
                            { name: 'Paid time off', value: 'Unlimited' },
                        ].map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </motion.div>
            </div>
        </div>
    );
}
