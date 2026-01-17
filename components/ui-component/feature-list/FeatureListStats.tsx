"use client";

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '100+' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
]

export default function FeatureListStats() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="lg:max-w-xl">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Our track record</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                Trusted by thousands of developers worldwide
                            </p>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-neutral-900/10 dark:border-white/10 pt-10 sm:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <dt className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-white">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center min-h-[300px]">
                        {/* Abstract Visual */}
                        <div className="relative w-64 h-64">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
