"use client";

import { useState } from "react";
import { BiPlayCircle, BiX } from "react-icons/bi";

export default function VideoModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-neutral-900 group cursor-pointer" onClick={() => setIsOpen(true)}>
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BiPlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                        Watch our journey
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-neutral-300"
                        >
                            <BiX className="w-10 h-10" />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}
