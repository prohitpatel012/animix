"use client";

import { useState } from "react";
import { BiExpand, BiX } from "react-icons/bi";

const images = [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
]

export default function GalleryLightbox() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100 cursor-pointer"
                            onClick={() => setSelected(src)}
                        >
                            <img src={src} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" alt="" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <BiExpand className="text-white text-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                    onClick={() => setSelected(null)}
                >
                    <button className="absolute top-4 right-4 text-white hover:text-neutral-300">
                        <BiX size={40} />
                    </button>
                    <img src={selected} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" alt="Full view" />
                </div>
            )}
        </div>
    )
}
