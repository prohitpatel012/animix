"use client";

import { BiServer, BiShield, BiGlobe, BiChip } from "react-icons/bi";

export default function StatsGrid() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-16">Platform Metrics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Uptime', val: '99.99%', icon: BiServer },
                        { label: 'Threats Blocked', val: '1.2M', icon: BiShield },
                        { label: 'Requests/sec', val: '50k+', icon: BiChip },
                        { label: 'Countries', val: '120+', icon: BiGlobe },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-neutral-950 p-6 rounded-xl shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-indigo-50 dark:bg-neutral-800 rounded-lg text-indigo-600">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.val}</p>
                                <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
