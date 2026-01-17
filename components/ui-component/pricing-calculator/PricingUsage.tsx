"use client";

export default function PricingUsage() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Pay as you go</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        No commitments. Only pay for the resources you consume.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Serverless Functions", unit: "$0.60", per: "per million executions" },
                        { name: "Edge Middleware", unit: "$0.40", per: "per million invocations" },
                        { name: "Bandwidth", unit: "$0.10", per: "per GB downloaded" },
                    ].map((item) => (
                        <div key={item.name} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{item.name}</h3>
                            <div className="mt-4 flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-bold text-indigo-600">{item.unit}</span>
                            </div>
                            <p className="text-neutral-500 mt-1">{item.per}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
