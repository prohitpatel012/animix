"use client";

const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
];

export default function BenefitStats() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {/* Split layout: Text on left, stats on right for larger screens */}
                    <div className="lg:col-span-1 lg:text-left flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                            Trusted by creators worldwide
                        </h2>
                        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                            We empower creators to build sustainable businesses. Our numbers speak for themselves. Join the movement today.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col gap-y-3 bg-neutral-50 dark:bg-neutral-900 px-6 py-8 rounded-2xl">
                                <dt className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
