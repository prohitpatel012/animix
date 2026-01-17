"use client";

export default function SplitReversed() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-6">
                        Seamless integration with your tools
                    </h2>
                    <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400 mb-8">
                        Connect with over 500+ apps instantly. From Slack to Salesforce, we have built-in connectors that just work.
                    </p>
                    <a href="#" className="text-indigo-600 font-bold hover:text-indigo-500 hover:underline">Browse Integration Library &rarr;</a>
                </div>
                <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
