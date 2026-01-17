"use client";

export default function CaseStudySidebar() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" className="rounded-2xl mb-8" alt="Team meeting" />
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Transforming HR Tech</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-7">
                        When WorkLife needed to modernize their employee portal, they turned to our component library. The result was a 50% reduction in development time and a 20% increase in employee engagement scores.
                    </p>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl sticky top-8">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-6">At a Glance</h3>
                        <dl className="space-y-4">
                            <div>
                                <dt className="text-sm text-neutral-500">Client</dt>
                                <dd className="font-semibold text-neutral-900 dark:text-white">WorkLife Inc.</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-neutral-500">Industry</dt>
                                <dd className="font-semibold text-neutral-900 dark:text-white">HR Tech</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-neutral-500">Services</dt>
                                <dd className="font-semibold text-neutral-900 dark:text-white">UI Design, React Dev</dd>
                            </div>
                        </dl>
                        <button className="w-full mt-8 bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-bold">Download PDF</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
