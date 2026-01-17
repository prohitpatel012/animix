"use client";

export default function CaseStudyMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-sm font-semibold text-neutral-500 mb-2">CASE STUDY</div>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">
                    Scaling Stripe's API Infrastructure
                </h1>
                <div className="prose prose-neutral dark:prose-invert text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    <p className="mb-6">
                        Scaling a financial infrastructure platform requires zero margin for error. In this deep dive, we explore how...
                    </p>
                    <p className="mb-6">
                        We implemented a multi-region active-active database configuration that reduced latency by 45ms for European customers.
                    </p>
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold underline">Continue reading</a>
                </div>
            </div>
        </div>
    )
}
