"use client";

import { BiVideo, BiBarChartAlt2, BiLayer } from "react-icons/bi";

export default function SplitWithIcons() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Everything you need</h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
                        We provide a comprehensive suite of tools to help you manage your business efficiently.
                    </p>
                    <div className="grid gap-8">
                        {[
                            { icon: BiVideo, title: "Video conferencing", desc: "HD video calls with screen sharing." },
                            { icon: BiBarChartAlt2, title: "Analytics", desc: "Track performance in real-time." },
                            { icon: BiLayer, title: "Layered security", desc: "Enterprise-grade protection." }
                        ].map((feat, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-none w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600">
                                    <feat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white">{feat.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neutral-100 dark:bg-neutral-800 rounded-3xl -z-10 translate-x-8 -translate-y-8"></div>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" className="rounded-2xl shadow-2xl w-full" alt="Features" />
                </div>
            </div>
        </div>
    )
}
