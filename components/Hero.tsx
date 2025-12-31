"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            <div className=" grid  grid-cols-1 items-center gap-16 px-60  py-32 md:grid-cols-3">
                {/* LEFT CONTENT */}
                <div
                    className="relative z-10 max-w-xl"
                >
                    {/* Badge */}
                    <div

                        className="mb-6 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 hover:bg-neutral-200"
                    >
                        🚀 Now in public beta
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-4xl font-semibold tracking-tight text-black sm:text-6xl"
                    >
                        Build faster.
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 }}

                            className="block text-gray-500">

                            {
                                ['Deliever faster smooth and cool'].map((name, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}

                                    >
                                        {name}
                                    </motion.span>
                                ))
                            }

                        </motion.p>
                    </h1>

                    {/* Subheadline */}
                    <p

                        className="mt-6 text-lg leading-relaxed text-neutral-600"
                    >
                        A modern platform to design, build, and scale production-ready
                        interfaces — without slowing your team down.
                    </p>

                    {/* CTA */}
                    <div

                        className="mt-10 flex items-center gap-4"
                    >
                        <button className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
                            Explore Components
                        </button>


                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-md bg-black text-white"
                        >
                            Explore Premium Templates
                        </motion.button>

                    </div>
                </div>

                {/* RIGHT VISUAL / ABOUT */}
                <div
                    className="relative flex h-[420px] items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50"
                >
                    <div className="text-center">
                        <p className="text-sm font-medium text-neutral-500">About Me</p>
                        <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                            Frontend Engineer
                        </h2>
                        <p className="mt-4 max-w-sm text-sm text-neutral-600">
                            I build modern, scalable, and motion-first interfaces using
                            Next.js, Tailwind CSS, and Framer Motion.
                        </p>
                    </div>
                </div>


                <div>
                    Cool
                </div>
            </div>




            {/* BACKGROUND GLOW */}
            {/* <div
                className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center"
            >
                <div className="h-[420px] w-[900px] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            </div> */}






        </section >


    );
}
