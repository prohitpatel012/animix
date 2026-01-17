"use client";

export default function CaseStudyHero() {
    return (
        <div className="relative bg-neutral-900 isolat overflow-hidden py-24 sm:py-32">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Acme Corp increased sales by 500%</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-300">
                        "The platform gave us the scalability and performance we needed to handle our Black Friday traffic without a single hiccup."
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                            Read full story
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            View all case studies <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
