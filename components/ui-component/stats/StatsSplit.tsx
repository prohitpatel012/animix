"use client";

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '500+' },
    { label: 'Beta Users', value: '5200+' },
    { label: 'Raised', value: '$25M' },
]

export default function StatsSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
                        alt="Team working"
                        className="rounded-2xl shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">On a mission to empower creators</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        We're building the financial infrastructure for the internet. From payments to payroll, we handle it all.
                    </p>
                    <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-neutral-200 dark:border-neutral-800 pt-10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">{stat.label}</dt>
                                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
