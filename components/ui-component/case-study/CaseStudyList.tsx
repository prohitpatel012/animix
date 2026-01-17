"use client";

const cases = [
    { title: "Improving page load speeds by 40%", category: "Performance", href: "#" },
    { title: "Redesigning the user dashboard for clarity", category: "UX Design", href: "#" },
    { title: "Migrating legacy database to the cloud", category: "Infrastructure", href: "#" },
    { title: "Scaling for Black Friday traffic spikes", category: "Scalability", href: "#" },
]

export default function CaseStudyList() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                    Latest Case Studies
                </h2>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {cases.map((cs) => (
                        <div key={cs.title} className="py-8 flex flex-col sm:flex-row sm:items-center justify-between group cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900 -mx-4 px-4 rounded-lg transition-colors">
                            <div>
                                <div className="text-sm font-semibold text-indigo-600 mb-1">{cs.category}</div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 transition-colors">{cs.title}</h3>
                            </div>
                            <div className="mt-4 sm:mt-0 flex items-center gap-2 text-neutral-500 font-medium group-hover:text-indigo-600">
                                Read Story <span aria-hidden="true">&rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
