"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons (Inline SVGs for independent portability) ---

const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
);

// --- Components ---

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                        <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white">Animix</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Product', 'Features', 'Pricing', 'Company'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-600 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <button className="px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-600 dark:text-neutral-300">
                            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {['Product', 'Features', 'Pricing', 'Company'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-blue-600 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 ring-1 ring-inset ring-blue-600/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        v2.0 is now live
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                        Build beautiful apps <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-violet-600">
                            in record time.
                        </span>
                    </h1>

                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
                        The ultimate starting point for your next project. meticulously designed,
                        fully responsive, and built with modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] flex items-center gap-2">
                            Start Building <ArrowRightIcon className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                            View Documentation
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export const Features = () => {
    const features = [
        {
            title: "Lightning Fast",
            description: "Optimized for speed with zero-runtime CSS and automatic code splitting.",
            icon: <RocketIcon className="w-6 h-6 text-white" />,
            color: "bg-orange-500"
        },
        {
            title: "Dark Mode Ready",
            description: "Seamlessly switch between dark and light modes with built-in theme support.",
            icon: <div className="w-6 h-6 text-white font-bold text-center leading-6">D</div>, // Simple placeholder
            color: "bg-purple-500"
        },
        {
            title: "Accessibility First",
            description: "Fully accessible components that adhere to WAI-ARIA design patterns.",
            icon: <CheckIcon className="w-6 h-6 text-white" />,
            color: "bg-green-500"
        }
    ];

    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                        Everything you need
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        A complete toolkit designed to help you build and launch faster than ever before.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CTA = () => {
    return (
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-neutral-900 dark:bg-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[16px_16px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white dark:text-black mb-6">
                            Ready to launch your idea?
                        </h2>
                        <p className="text-lg text-neutral-300 dark:text-neutral-600 mb-10 max-w-lg mx-auto">
                            Join thousands of developers building the future with our component library today.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-bold text-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Animix</div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            Making the web more beautiful, one pixel at a time.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-600">Guides</a></li>
                            <li><a href="#" className="hover:text-blue-600">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-500">
                        © {new Date().getFullYear()} Animix Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function ModernLandingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans text-neutral-900 dark:text-neutral-100 selection:bg-blue-100 dark:selection:bg-blue-900">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
