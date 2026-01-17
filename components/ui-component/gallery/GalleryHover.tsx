"use client";

export default function GalleryHover() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-96 w-full gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out bg-neutral-200 rounded-2xl overflow-hidden group">
                            <img
                                src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000000}?auto=format&fit=crop&w=800&q=80`}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt=""
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                <span className="text-white font-bold whitespace-nowrap">Project 0{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
