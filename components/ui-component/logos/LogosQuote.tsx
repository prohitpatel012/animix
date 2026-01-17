"use client";

export default function LogosQuote() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-4">
                            Trusted by industry leaders
                        </h2>
                        <blockquote className="text-xl font-medium leading-8 text-neutral-900 dark:text-white">
                            "This platform has completely transformed how we handle our logistics. It's simply groundbreaking."
                        </blockquote>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="font-semibold text-neutral-900 dark:text-white">Sarah Connor</div>
                            <div className="text-neutral-500">•</div>
                            <div className="text-neutral-500">CTO at TechCores</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 opacity-70">
                        <img src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" className="dark:invert w-full" alt="" />
                        <img src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" className="dark:invert w-full" alt="" />
                        <img src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" className="dark:invert w-full" alt="" />
                        <img src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" className="dark:invert w-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
