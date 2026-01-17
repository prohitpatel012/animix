"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";

export default function HeroVideoBackground() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
            <div className="absolute inset-0 -z-10 h-full w-full object-cover">
                <img
                    src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80"
                    alt="City timelapse"
                    className="h-full w-full object-cover scale-110 motion-safe:animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gray-900/70" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl font-sans">
                        Limitless Potential
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <button className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 text-white flex items-center gap-2 hover:bg-white/30 transition">
                            <BiPlayCircle /> Watch the film
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
