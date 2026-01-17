"use client";

import { BiPlay } from "react-icons/bi";

export default function VideoBackground() {
    return (
        <div className="relative isolate overflow-hidden bg-neutral-900 py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 h-full w-full object-cover">
                <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-30">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Immersive Experiences</h2>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                    Background videos add depth and atmosphere to your hero sections.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <div className="flex items-center gap-2 text-white border border-white/30 bg-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                        <BiPlay className="w-5 h-5" /> Watch full reel
                    </div>
                </div>
            </div>
        </div>
    )
}
