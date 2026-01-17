"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const features = [
    {
        title: "Real-time Collaboration",
        content: "Work with your team in real-time. See cursors, comments, and edits as they happen. No more merge conflicts on design files."
    },
    {
        title: "Version History",
        content: "Every change is saved automatically. Go back in time to any version of your project with a single click."
    },
    {
        title: "Advanced Prototyping",
        content: "Create high-fidelity prototypes that look and feel like the real thing. add interactions, animations, and transitions."
    },
    {
        title: "Developer Handoff",
        content: "Inspect designs and grab assets, CSS, and values. Everything developers need to build exactly what you designed."
    }
];

export default function FeatureListAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Designed for speed</h2>
                        <p className="text-lg text-neutral-400 mb-12">
                            The fastest way to go from idea to reality. Built for teams who want to ship refined products.
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="border-b border-neutral-800 pb-4 last:border-0">
                                    <button
                                        onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                        className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white focus:outline-none"
                                    >
                                        <span>{feature.title}</span>
                                        {index === openIndex ? <BiChevronUp className="h-5 w-5 text-indigo-400" /> : <BiChevronDown className="h-5 w-5 text-neutral-500" />}
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: index === openIndex ? 'auto' : 0, opacity: index === openIndex ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-2 text-base text-neutral-400">{feature.content}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for dynamic image based on selection, or just a static attractive graphic */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 absolute inset-0 blur-3xl"></div>
                        <div className="relative rounded-2xl bg-neutral-800 border border-neutral-700 p-8 h-[400px] flex items-center justify-center">
                            <span className="text-neutral-500">Feature Preview UI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
