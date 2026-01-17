"use client";

const images = [
    "https://images.unsplash.com/photo-1552083858-5847604561ed?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1549488344-c705fa9c20a4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551043044-80b88f39561b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544941909-5c1cfcb73d40?auto=format&fit=crop&w=600&q=80",
];

export default function GallerySimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">Our Workspace</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, i) => (
                        <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                            <img src={src} className="h-full w-full object-cover transition-transform hover:scale-105" alt="Gallery item" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
