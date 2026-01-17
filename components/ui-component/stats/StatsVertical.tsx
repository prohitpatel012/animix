"use client";

const metrics = [
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Client Retention", value: "95%" },
    { label: "Support Tickets Resolved", value: "12k" },
]

export default function StatsVertical() {
    return (
        <div className="bg-indigo-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Results that speak louder than words</h2>
                    <p className="text-indigo-100 text-lg">
                        We don't just promise results, we deliver them reliably week after week for thousands of customers.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    {metrics.map((m) => (
                        <div key={m.label} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex justify-between items-center border border-white/10">
                            <span className="text-indigo-100 font-medium">{m.label}</span>
                            <span className="text-4xl font-bold text-white">{m.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
