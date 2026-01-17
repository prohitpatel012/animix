"use client";

import { useState } from "react";

const allImages = [
    { id: 1, tag: "nature", src: "https://images.unsplash.com/photo-1501854140884-074bf86ed91c?auto=format&fit=crop&w=600&q=80" },
    { id: 2, tag: "tech", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
    { id: 3, tag: "arch", src: "https://images.unsplash.com/photo-1486325212027-8081648a82eb?auto=format&fit=crop&w=600&q=80" },
    { id: 4, tag: "nature", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
    { id: 5, tag: "tech", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
    { id: 6, tag: "arch", src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&q=80" },
]

export default function GalleryFilters() {
    const [filter, setFilter] = useState("all");

    const filtered = filter === "all" ? allImages : allImages.filter(img => img.tag === filter);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center gap-4 mb-10">
                    {['all', 'nature', 'tech', 'arch'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${filter === f ? 'bg-indigo-600 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'}`}
                        >
                            {f === 'arch' ? 'Architecture' : f}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.map((img) => (
                        <div key={img.id} className="aspect-square bg-neutral-200 rounded-lg overflow-hidden animate-fade-in">
                            <img src={img.src} className="w-full h-full object-cover" alt={img.tag} />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
                animation: fadeIn 0.3s ease-out;
            }
         `}</style>
        </div>
    )
}
