"use client";

import { BiTrendingUp, BiUser, BiGlobe } from "react-icons/bi";

const stats = [
    { name: 'Revenue Growth', value: '+24%', icon: BiTrendingUp, desc: 'Year over year growth since 2023' },
    { name: 'Active Regions', value: '12', icon: BiGlobe, desc: 'Countries with local offices' },
    { name: 'Team Size', value: '500+', icon: BiUser, desc: 'Dedicated professionals worldwide' },
]

export default function StatsCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-white dark:bg-neutral-950 px-6 py-10 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-md">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{stat.name}</dt>
                            <dd className="mt-2 text-4xl font-bold text-neutral-900 dark:text-white">{stat.value}</dd>
                            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
