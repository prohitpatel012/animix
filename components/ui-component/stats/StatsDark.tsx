"use client";

const stats = [
    { id: 1, name: 'Active Users', value: '8.9K' },
    { id: 2, name: 'Success Rate', value: '99.9%' },
    { id: 3, name: 'Response Time', value: '< 20ms' },
    { id: 4, name: 'Global Servers', value: '150+' },
]

export default function StatsDark() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by developers worldwide</h2>
                        <p className="mt-4 text-lg leading-8 text-neutral-300">
                            Our platform handles millions of requests every day with zero downtime.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-neutral-300">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
