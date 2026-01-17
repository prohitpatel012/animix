"use client";

import { BiCheck } from "react-icons/bi";

const features = [
    "Share rich posts with images, videos, and links.",
    "Real-time notifications for interactions.",
    "Advanced search filters to find exactly what you need.",
    "Customizable profile themes and layouts.",
    "Private messaging with end-to-end encryption.",
    "Create and manage multiple communities.",
];

export default function FeatureListSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        All the basics, perfected.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        We focused on getting the fundamentals right. No bloat, just the features you use every day, polished to perfection.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-neutral-900 dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {/* This specific list is designed to flow vertically in columns or flexibly */}
                        <div className="col-span-1 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 w-full">
                            {features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <BiCheck className="h-7 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
