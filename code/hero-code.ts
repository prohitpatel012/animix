"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt, BiPlayCircle, BiLogoApple, BiLogoPlayStore, BiCommand } from "react-icons/bi";

export const heroSimpleCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HeroSimple() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 dark:text-neutral-400 dark:ring-neutral-100/10 dark:hover:ring-neutral-100/20">
                            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
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

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
`;

export const heroSimpleCenteredCode = `
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
`;

export const heroSplitCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";

export default function HeroSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="relative isolate overflow-hidden">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-neutral-200 dark:stroke-neutral-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>

                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 lg:shrink-0"
                    >
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20">
                                    Latest updates
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-400">
                                    <span>Just shipped v1.0</span>
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                            Deploy to the cloud with confidence
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Get started
                            </Link>
                            <Link href="#" className="flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                                <BiPlayCircle className="text-xl" /> Watch demo
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
                    >
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&h=600&q=80"
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
`;

export const heroSaaSCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSaaS() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        All-in-one platform for your team
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Streamline your operations with our integrated dashboard. Real-time analytics, team management, and secure data storage all in one place.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Start 14-day free trial
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                            Live demo <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80"
                        alt="App screenshot"
                        width={2432}
                        height={1442}
                        className="rounded-md shadow-2xl ring-1 ring-neutral-900/10 dark:ring-white/10"
                    />
                </motion.div>
            </div>
        </div>
    );
}
`;

export const heroAppCode = `
"use client";

import { motion } from "motion/react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

export default function HeroApp() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
                >
                    <div className="flex">
                        <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-neutral-600 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 dark:text-neutral-400 dark:ring-neutral-100/10">
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">v2.0 is live</span>
                            <span className="h-4 w-px bg-neutral-900/10 dark:bg-neutral-100/10" aria-hidden="true" />
                            <a href="#" className="flex items-center gap-x-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                See what's new <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                        Your entire workflow, in your pocket.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Manage tasks, collaborate with your team, and track progress from anywhere. Available on iOS and Android.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                            <BiLogoApple className="text-xl" /> App Store
                        </a>
                        <a href="#" className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900">
                            <BiLogoPlayStore className="text-xl" /> Google Play
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
                >
                    <div className="relative mx-auto w-[300px] rounded-3xl shadow-2xl bg-neutral-900 border-[8px] border-neutral-900 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1470&q=80"
                            alt="Mobile app screenshot"
                            className="w-full rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
`;

export const heroGradientCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroGradient() {
    return (
        <div className="bg-white dark:bg-neutral-950">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                            We make the web <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">faster.</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                            <Link href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
`;

export const heroDarkCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiCommand } from "react-icons/bi";

export default function HeroDark() {
    return (
        <div className="bg-neutral-950 isolate overflow-hidden relative">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#0ea5e9] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
                    v4.0 is available now
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold tracking-tight text-white sm:text-7xl bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
                >
                    Develop with <br className="hidden sm:block" /> Superpowers
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto"
                >
                    The complete toolkit for modern developers. Shippable code, instant deployments, and global edge network.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex items-center justify-center gap-x-6"
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white leading-none">
                            <BiCommand /> Clone Repo
                        </button>
                    </div>
                    <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-neutral-300 transition-colors">
                        Read Documentation <span aria-hidden="true">→</span>
                    </Link>
                </motion.div>

                <div className="mt-16 flow-root sm:mt-24">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="rounded-md bg-neutral-900/50 shadow-2xl ring-1 ring-white/10 h-[300px] flex items-center justify-center text-neutral-500 font-mono text-sm border border-neutral-800">
                        // Code Editor Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
`;
