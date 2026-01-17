"use client";

export default function StatsComparison() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white">Why developers switch to us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 opacity-50 blur-[1px] hover:blur-0 transition-all">
                        <h3 className="text-xl font-semibold text-neutral-400 mb-6">Competitor X</h3>
                        <dl className="space-y-4 text-neutral-500">
                            <div className="flex justify-between"><span>Deployment</span><span>5 mins</span></div>
                            <div className="flex justify-between"><span>Latency</span><span>120ms</span></div>
                            <div className="flex justify-between"><span>Support</span><span>Email Only</span></div>
                        </dl>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 p-8 rounded-2xl shadow-2xl ring-1 ring-indigo-500 relative transform md:scale-105">
                        <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">WINNER</span>
                        <h3 className="text-xl font-bold text-white mb-6">Our Platform</h3>
                        <dl className="space-y-4 text-indigo-100 font-medium">
                            <div className="flex justify-between border-b border-indigo-500/30 pb-2"><span>Deployment</span><span className="text-white font-bold">Instantly</span></div>
                            <div className="flex justify-between border-b border-indigo-500/30 pb-2"><span>Latency</span><span className="text-white font-bold">&lt; 20ms</span></div>
                            <div className="flex justify-between border-b border-indigo-500/30 pb-2"><span>Support</span><span className="text-white font-bold">24/7 Live</span></div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
