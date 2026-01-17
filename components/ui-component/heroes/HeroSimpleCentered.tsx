"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HeroSimpleCentered() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >

                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Get started
                        </Link>
                        <Link href="#" className="flex items-center text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                            Learn more <BiRightArrowAlt className="ml-1 text-lg" />
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
