"use client";

import { BiCheck } from "react-icons/bi";

export default function VideoSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Video thumbnail" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/30 transition-colors cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-6">
                        Watch how we build
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        Transparency is key. We recorded our entire process from start to finish so you can see exactly how much care goes into every pixel.
                    </p>
                    <div className="space-y-4">
                        {['Planning & Research', 'Design System', 'Development', 'QA Testing'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="flex-none rounded-full bg-indigo-100 p-1 text-indigo-600">
                                    <BiCheck className="h-5 w-5" />
                                </div>
                                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
