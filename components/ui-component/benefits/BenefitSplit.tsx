"use client";

const benefits = [
    {
        title: "Global Reach",
        description: "Expand your market beyond borders with our multi-currency and multi-language support. Reach customers anywhere in the world.",
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Smart Automation",
        description: "Let AI handle the busywork. From scheduling to follow-ups, optimize your efficiency with intelligent workflows.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Deep Insights",
        description: "Make data-driven decisions. Our dashboard provides real-time analytics on user behavior and sales performance.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
    }
];

export default function BenefitSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
                {benefits.map((benefit, index) => (
                    <div key={benefit.title} className={`flex flex-col gap-16 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center`}>
                        <div className="flex-1 lg:max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-6">
                                {benefit.title}
                            </h2>
                            <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                {benefit.description}
                            </p>
                            <div className="mt-8">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Learn more &rarr;</a>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src={benefit.img}
                                alt={benefit.title}
                                className="w-full rounded-2xl shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
