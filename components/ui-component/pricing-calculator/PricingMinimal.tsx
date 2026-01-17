"use client";

const costs = [
    { name: 'Server Cost', value: '$450.00' },
    { name: 'Bandwidth', value: '$85.00' },
    { name: 'Database', value: '$120.00' },
    { name: 'Maintenance', value: '$50.00' },
]

export default function PricingMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Simple, transparent pricing</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        No hidden fees. You get exactly what you pay for. All plans include a 30-day money-back guarantee.
                    </p>
                    <div className="mt-16 rounded-3xl bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-900/10 dark:ring-white/10 sm:p-10 p-8">
                        <h3 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Estimated Monthly Cost</h3>
                        <dl className="mt-6 grid grid-cols-1 gap-6 border-t border-neutral-200 dark:border-neutral-800 py-6 sm:grid-cols-2">
                            {costs.map((cost) => (
                                <div key={cost.name} className="flex flex-col gap-1">
                                    <dt className="text-sm font-medium text-neutral-500">{cost.name}</dt>
                                    <dd className="text-2xl font-bold text-neutral-900 dark:text-white">{cost.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-6 flex justify-between items-center">
                            <span className="text-base font-semibold text-neutral-900 dark:text-white">Total</span>
                            <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">$705.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
