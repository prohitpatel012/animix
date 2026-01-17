"use client";

export default function SplitOverlapping() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative">
                    <div className="lg:absolute lg:inset-0 lg:left-1/2">
                        <img
                            className="h-64 w-full bg-neutral-50 object-cover sm:h-80 lg:h-full rounded-2xl shadow-xl"
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
                            alt=""
                        />
                    </div>
                    <div className="relative pt-12 pb-12 lg:pt-32 lg:pb-32 lg:max-w-[50%] lg:pr-16">
                        <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-2xl lg:shadow-none lg:bg-transparent">
                            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                Always in the loop
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Never miss a beat with our automated notification system. Custom alerts, daily digests, and more keep you informed without the noise.
                            </p>
                            <div className="mt-8">
                                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
