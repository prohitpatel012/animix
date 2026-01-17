"use client";

export default function CaseStudyStats() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Automotive</div>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Revving up online sales</h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        How a leading car dealership modernized their digital presence and achieved record-breaking sales numbers in just 3 months.
                    </p>
                    <a href="#" className="text-indigo-600 font-semibold hover:underline">Read the full story</a>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {[
                        { val: "300%", label: "Lead Increase" },
                        { val: "45%", label: "Lower CAC" },
                        { val: "2.5x", label: "Better ROAS" },
                        { val: "10k+", label: "Cars Sold" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">{stat.val}</div>
                            <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
