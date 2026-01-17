"use client";

export default function StatsBackground() {
    return (
        <div className="relative isolat overflow-hidden bg-neutral-900 py-24 sm:py-32">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2600" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 filter grayscale" alt="" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">global_metrics.json</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { k: "nodes", v: "5,000" },
                        { k: "throughput", v: "2TB/s" },
                        { k: "coverage", v: "100%" },
                        { k: "latency", v: "15ms" },
                    ].map((stat) => (
                        <div key={stat.k} className="border border-white/10 bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                            <div className="text-neutral-400 font-mono text-sm mb-2">{stat.k}</div>
                            <div className="text-white font-mono text-3xl font-bold text-green-400">{stat.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
