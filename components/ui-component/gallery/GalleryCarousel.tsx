"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=80",
]

export default function GalleryCarousel() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group">
                    <img src={images[current]} className="w-full h-full object-cover transition-transform duration-500" alt="Slide" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-8">
                        <h3 className="text-white text-3xl font-bold">Nature's Majesty {current + 1}</h3>
                        <p className="text-white/80">Captured in 8K resolution.</p>
                    </div>

                    <button onClick={prev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-colors opacity-0 group-hover:opacity-100">
                        <BiChevronLeft size={30} />
                    </button>
                    <button onClick={next} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-colors opacity-0 group-hover:opacity-100">
                        <BiChevronRight size={30} />
                    </button>

                    <div className="absolute bottom-4 right-4 flex gap-2">
                        {images.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${current === i ? 'bg-white' : 'bg-white/40'}`} onClick={() => setCurrent(i)}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
