"use client";

export default function CaseStudyQuote() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-indigo-600 mb-6">Case Study: FinTech Revolution</p>
                    <figure>
                        <blockquote className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl leading-tight">
                            “We reduced our infrastructure costs by 60% while simultaneously improving latency by 200ms after switching to this platform.”
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-12 w-12 rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-neutral-900 dark:text-white">Elena Fisher</div>
                                <div className="text-neutral-500">/</div>
                                <div className="text-neutral-500">CTO, BankFlow</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}
