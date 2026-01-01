"use client";

import { motion } from "motion/react";
import BlogSection from "./BlogSection";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            <div className="lg:grid  gap-16 lg:px-60  lg:py-32 lg:grid-cols-3 grid py-10 px-6">
                {/* LEFT CONTENT */}
                <div
                    className="relative z-10 max-w-xl"
                >
                    {/* Badge */}
                    <div

                        className="mb-6 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 hover:bg-neutral-200"
                    >
                        Ready for Production use 🚀
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-4xl font-semibold tracking-tight text-black sm:text-6xl"
                    >
                        Build Faster
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}

                            className="block text-gray-500">

                            {
                                ['With Animix UI Component Library'].map((name, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}

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
                        Build faster with ready-to-use components and templates with Animix UI Component Library.
                    </p>

                    {/* CTA */}
                    <div

                        className="mt-10 flex items-center gap-4 flex-col lg:flex-row"
                    >
                        <Link href="/components-hub" className="w-full lg:w-auto">
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="rounded-md border border-black text-black hover:bg-black hover:text-white transition
                        lg:px-4 lg:py-2 px-2 py-1 w-full lg:w-auto cursor-pointer
                        ">
                                Explore Components
                            </motion.button>

                        </Link>

                        <Link href="/templates-hub" className="w-full lg:w-auto">
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="rounded-md border border-black hover:bg-black hover:text-white transition
                        lg:px-4 lg:py-2 px-2 py-1 w-full lg:w-auto bg-black text-white cursor-pointer
                        ">
                                Explore Templates
                            </motion.button>

                        </Link>



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


                <div className="hidden lg:inline">
                    <BlogSection />

                </div>
            </div>











        </section >


    );
}
