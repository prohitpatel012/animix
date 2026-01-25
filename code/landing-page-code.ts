
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

export const landingPageModernCode = `
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

// Simplified components for this landing page demo to ensure self-containment
// In a real app, you might import these from your components library

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0 flex items-center gap-2 font-bold text-xl dark:text-white">Animix</div>
                    <div className="hidden md:flex space-x-8">
                        {['Product', 'Features', 'Pricing'].map(item => (
                            <a key={item} href="#" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:block">
                        <button className="px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 ring-1 ring-inset ring-indigo-600/20">
                    v2.0 is now live
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                    Build beautiful apps <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">in record time.</span>
                </h1>
                <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
                    The ultimate starting point for your next project. Meticulously designed, fully responsive, and built with modern technologies.
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg flex items-center gap-2">
                        Start Building <BiRightArrowAlt />
                    </button>
                    <button className="px-8 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
                        Documentation
                    </button>
                </div>
            </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
        </div>
    </section>
);

const FeatureCard = ({ title, desc, icon }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800"
    >
        <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white mb-6 text-xl">{icon}</div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
    </motion.div>
);

const Features = () => (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Everything you need</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">A complete toolkit designed to help you build faster.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard title="Lightning Fast" desc="Optimized for speed with zero-runtime CSS." icon="⚡" />
                <FeatureCard title="Dark Mode" desc="Seamlessly switch between themes." icon="🌙" />
                <FeatureCard title="Accessible" desc="Adheres to WAI-ARIA patterns." icon="♿" />
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Animix. All rights reserved.
        </div>
    </footer>
);

export default function LandingPageModern() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans text-neutral-900 dark:text-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
`;

export const landingPageSaaSCode = `
"use client";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";

// Importing specific components from the library to compose the page
import HeaderSimple from "@/components/ui-component/headers/HeaderSimple";
import HeroSaaS from "@/components/ui-component/heroes/HeroSaaS";
import FeatureBento from "@/components/ui-component/feature/FeatureBento";
import PricingSaaS from "@/components/ui-component/pricing/PricingSaaS";
import FooterSimple from "@/components/ui-component/footer/FooterSimple";

export default function LandingPageSaaS() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            {/* 1. Header */}
            <HeaderSimple />

            <main>
                {/* 2. Hero Section */}
                <HeroSaaS />

                {/* 3. Social Proof / Logos (Simplified inline) */}
                <section className="py-10 border-y border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <p className="text-center text-sm font-medium text-neutral-500 mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Placeholder Logos */}
                        {['Acme', 'Tuple', 'SavvyCal', 'Statick'].map(name => (
                            <span key={name} className="text-xl font-bold text-neutral-900 dark:text-white">{name}</span>
                        ))}
                    </div>
                </section>

                {/* 4. Features Bento Grid */}
                <div className="py-24">
                    <FeatureBento />
                </div>

                {/* 5. Pricing Section */}
                <PricingSaaS />

                {/* 6. CTA Section */}
                <section className="bg-indigo-600 py-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Ready to dive in?</h2>
                        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                            Start your 14-day free trial today. No credit card required.
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-bold hover:bg-indigo-50 transition">
                            Get started for free
                        </button>
                    </div>
                </section>
            </main>

            {/* 7. Footer */}
            <FooterSimple />
        </div>
    );
}
`;

export const landingPageAgencyCode = `
"use client";

import HeaderCentered from "@/components/ui-component/headers/HeaderCentered";
import HeroSplit from "@/components/ui-component/heroes/HeroSplit";
import FeatureSimple from "@/components/ui-component/feature/FeatureSimple";
import TestimonialGrid from "@/components/ui-component/testimonials/TestimonialGrid";
import FooterLarge from "@/components/ui-component/footer/FooterLarge";

export default function LandingPageAgency() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <HeaderCentered />
            
            <main>
                <HeroSplit />
                
                <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                            Our Capabilities
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                            We help ambitious brands define the future.
                        </p>
                    </div>
                    <FeatureSimple />
                </section>

                <TestimonialGrid />
                
                <section className="py-24 relative overflow-hidden bg-neutral-900 dark:bg-black isolate">
                     <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 text-center relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Lets create something <br />
                            extraordinary together.
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100">
                                Contact Us
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                View Portfolio <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterLarge />
        </div>
    );
}
`;
