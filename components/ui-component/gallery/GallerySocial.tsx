"use client";

import { BiHeart, BiMessageRounded, BiBookmark } from "react-icons/bi";

export default function GallerySocial() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="aspect-square relative group bg-neutral-100 overflow-hidden cursor-pointer">
                            <img
                                src={`https://images.unsplash.com/photo-${1510000000000 + i * 2000000}?auto=format&fit=crop&w=600&q=80`}
                                className="w-full h-full object-cover"
                                alt="Social feed"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                                <div className="flex items-center gap-2"><BiHeart className="w-6 h-6 fill-current" /> {120 + i * 14}</div>
                                <div className="flex items-center gap-2"><BiMessageRounded className="w-6 h-6 fill-current" /> {20 + i}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
