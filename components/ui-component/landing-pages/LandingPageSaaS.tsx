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
