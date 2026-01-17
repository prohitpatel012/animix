"use client";

export default function GalleryPolaroid() {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { caption: "Summer '23", rotate: "-rotate-2" },
                        { caption: "Roadtrip", rotate: "rotate-3" },
                        { caption: "Besties", rotate: "-rotate-1" },
                    ].map((item, i) => (
                        <div key={i} className={`bg-white p-4 pb-16 shadow-lg transform ${item.rotate} hover:rotate-0 hover:z-10 hover:scale-105 transition-all duration-300 ease-out cursor-pointer`}>
                            <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-${1520000000000 + i * 500000}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover" alt="" />
                            </div>
                            <p className="font-handwriting text-2xl text-center text-neutral-800">{item.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
