"use client";

export default function VideoFloating() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-6">
                        See it in action
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        Our platform is intuitive and powerful. Watch this quick demo to learn the basics in under 2 minutes.
                    </p>
                    <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 list-disc ml-5">
                        <li>3D rendering engine</li>
                        <li>Real-time collaboration</li>
                        <li>Cloud storage included</li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-900/10 border border-white/20">
                        <div className="aspect-[4/3] bg-neutral-800 flex items-center justify-center">
                            {/* Placeholder for floating video */}
                            <div className="text-white flex flex-col items-center">
                                <span className="text-6xl mb-2">▶</span>
                                <span className="font-medium">Play Demo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
