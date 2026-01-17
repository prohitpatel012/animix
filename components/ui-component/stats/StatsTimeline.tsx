"use client";

const history = [
    { year: '2021', val: '$1M', label: 'Seed Round' },
    { year: '2022', val: '10k', label: 'Users Reached' },
    { year: '2023', val: '$12M', label: 'Series A' },
    { year: '2024', val: '1M+', label: 'Active Users' },
]

export default function StatsTimeline() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16">Our Journey</h2>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 dark:bg-neutral-800 -z-10 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {history.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-neutral-950 p-6 relative">
                                <span className="text-sm font-bold text-indigo-600 mb-2 block">{item.year}</span>
                                <div className="text-4xl font-black text-neutral-900 dark:text-white mb-2">{item.val}</div>
                                <div className="text-neutral-500">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
