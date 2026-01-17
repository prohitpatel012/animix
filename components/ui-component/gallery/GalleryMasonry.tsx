"use client";

// Simple manual masonry effect with columns
const columns = [
    [
        "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
    ],
    [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    ],
    [
        "https://images.unsplash.com/photo-1544941909-5c1cfcb73d40?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1481487484168-9b930d552089?auto=format&fit=crop&w=600&q=80",
    ],
]

export default function GalleryMasonry() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">Travel Diaries</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        {columns[0].map((src, i) => (
                            <div key={i}><img className="h-auto max-w-full rounded-lg" src={src} alt="" /></div>
                        ))}
                    </div>
                    <div className="grid gap-4">
                        {columns[1].map((src, i) => (
                            <div key={i}><img className="h-auto max-w-full rounded-lg" src={src} alt="" /></div>
                        ))}
                    </div>
                    <div className="grid gap-4">
                        {columns[0].map((src, i) => (
                            <div key={i}><img className="h-auto max-w-full rounded-lg" src={src} alt="" /></div>
                        ))}
                    </div>
                    <div className="grid gap-4">
                        {columns[1].map((src, i) => (
                            <div key={i}><img className="h-auto max-w-full rounded-lg" src={src} alt="" /></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
