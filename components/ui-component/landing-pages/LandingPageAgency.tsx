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
