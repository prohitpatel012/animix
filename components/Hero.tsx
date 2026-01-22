'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiCodeAlt, BiLayout, BiNews, BiRightArrowAlt } from 'react-icons/bi'

export default function LandingPage() {
    return (
        <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                v1.0 is now live
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500"
                            >
                                Build stunning web apps <span className="hidden sm:inline"><br /></span>
                                <span className="text-neutral-900 dark:text-white">without the hassle.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg leading-8 text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg mx-auto lg:mx-0"
                            >
                                A comprehensive library of production-ready components, templates, and layouts.
                                Stop reinventing the wheel—just copy, paste, and ship.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center justify-center lg:justify-start gap-4"
                            >
                                <Link href='/components-hub'>
                                    <button className="flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 shadow-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                                        Browse Components
                                        <BiRightArrowAlt className='text-xl' />
                                    </button>
                                </Link>
                                <Link href="/templates">
                                    <button className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-8 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
                                        View Templates
                                    </button>
                                </Link>
                            </motion.div>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-neutral-500 font-medium">
                                <span className="flex items-center gap-2"><BiCodeAlt className="text-lg" /> TypeScript</span>
                                <span className="flex items-center gap-2"><BiLayout className="text-lg" /> Tailwind CSS</span>
                                <span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center font-bold text-[10px]">F</div> Framer Motion</span>
                            </div>
                        </div>

                        {/* RIGHT: ANIMATED MOCKUPS */}
                        <div className="relative mt-12 lg:mt-0 perspective-1000">
                            {/* Abstract Decorative blobs */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

                            <motion.div
                                initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
                                animate={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1 }}
                                transition={{ duration: 1.5, type: "spring" }}
                                className="relative z-10 w-full max-w-lg mx-auto"
                            >
                                {/* MAIN: Templates Page Screenshot */}
                                <div className="relative rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden">
                                    <div className="h-6 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-4 gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <img
                                        src="/hero/templates-preview.png"
                                        alt="Animix Templates"
                                        className="w-full h-auto object-cover"
                                    />

                                    {/* Overlay Gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>

                                {/* FLOATING 1: Blog Preview (Bottom Right) */}
                                <motion.div
                                    className="absolute -bottom-12 -right-12 w-3/4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="h-5 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-3">
                                        <span className="text-[10px] text-neutral-400">Blog Updates</span>
                                    </div>
                                    <img
                                        src="/hero/blog-preview.png"
                                        alt="Blog Preview"
                                        className="w-full h-auto"
                                    />
                                </motion.div>

                                {/* FLOATING 2: Modal Component (Top Left) */}
                                <motion.div
                                    className="absolute -top-16 -left-12 w-2/3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden hidden sm:block"
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="h-5 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-3">
                                        <span className="text-[10px] text-neutral-400">Interactive Modal</span>
                                    </div>
                                    <img
                                        src="/hero/modal-preview.png"
                                        alt="Modal Component"
                                        className="w-full h-auto"
                                    />
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TECH STACK STRIP ================= */}
            <section className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 py-10">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-6 tracking-wide uppercase">Powering next-gen applications</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text representations or placeholder logos */}
                        <span className="text-xl font-bold font-mono">NEXT.js</span>
                        <span className="text-xl font-bold font-sans">React</span>
                        <span className="text-xl font-bold font-sans text-blue-500">TypeScript</span>
                        <span className="text-xl font-bold font-sans text-teal-500">Tailwind</span>
                        <span className="text-xl font-bold font-serif italic">Framer</span>
                        <span className="text-xl font-bold font-mono text-green-600">MongoDB</span>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES GRID ================= */}
            <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Everything you need to build faster
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Designed with scalability, accessibility, and performance in mind.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="flex flex-col group hover:bg-neutral-50 dark:hover:bg-neutral-900 p-6 rounded-2xl transition-colors">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                    {feature.icon}
                                    {feature.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                    <p className="flex-auto">{feature.desc}</p>
                                    <p className="mt-6">
                                        <a href="#" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="relative isolate overflow-hidden bg-neutral-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-neutral-300">
                                Get the latest component updates, design tips, and templates delivered straight to your inbox.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                                <button type="submit" className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Subscribe</button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <BiLayout className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly Articles</dt>
                                <dd className="mt-2 leading-7 text-neutral-400">Deep dives into UI engineering and responsive design patterns.</dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <BiCodeAlt className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">New Components</dt>
                                <dd className="mt-2 leading-7 text-neutral-400">Be the first to know when we drop new free components.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8">
                            <span className="text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                                UI<span className="text-blue-600">Lib</span>
                            </span>
                            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                Making the world a better looking place through constructing elegant hierarchies.
                            </p>
                            <div className="flex space-x-6">
                                {/* Social placeholders */}
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Solutions</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Marketing</a></li>
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Analytics</a></li>
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Commerce</a></li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Support</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Pricing</a></li>
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Documentation</a></li>
                                        <li><a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Guides</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-neutral-900/10 dark:border-neutral-800 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-neutral-500">&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

/* ================= DATA ================= */

const FEATURES = [
    {
        title: 'Production Ready',
        desc: 'Every component is strictly typed, accessible, and tested for production use immediately.',
        icon: <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600"><BiCodeAlt className="text-white text-xl" /></div>
    },
    {
        title: 'Modern Stack',
        desc: 'Built with the latest Next.js 14 features, Tailwind CSS for styling, and Framer Motion for animations.',
        icon: <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600"><BiLayout className="text-white text-xl" /></div>
    },
    {
        title: 'Easy Customization',
        desc: 'Copy and paste the code into your project and customize it with standard utility classes.',
        icon: <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-pink-600"><BiCodeAlt className="text-white text-xl" /></div>
    },
]
