"use client";

import { motion } from "motion/react";
import { BiCube, BiShapeSquare, BiLayer, BiGridAlt } from "react-icons/bi";

const features = [
    {
        name: "Modular",
        description: "Build with lego-like blocks.",
        icon: BiCube,
    },
    {
        name: "Flexible",
        description: "Adapt to any screen size.",
        icon: BiShapeSquare,
    },
    {
        name: "Layered",
        description: "Manage z-index with ease.",
        icon: BiLayer,
    },
    {
        name: "Grid System",
        description: "12-column grid foundation.",
        icon: BiGridAlt,
    },
];

export default function FeatureIconBlocks() {
    return (
        <div className="bg-indigo-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Designed for designers</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.name}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center bg-indigo-500/50 rounded-2xl p-8 backdrop-blur-sm border border-indigo-400/30"
                        >
                            <feature.icon className="h-12 w-12 text-white mb-4" />
                            <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                            <p className="mt-2 text-sm text-indigo-100">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
