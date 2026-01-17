"use client";

const items = [
    { title: "Ocean", img: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=600&q=80" },
    { title: "Forest", img: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&w=600&q=80" },
    { title: "Desert", img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=600&q=80" },
    { title: "Urban", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80" },
    { title: "Peak", img: "https://images.unsplash.com/photo-1464822759024-48dd654a1545?auto=format&fit=crop&w=600&q=80" },
]

export default function GalleryHorizontal() {
    return (
        <div className="bg-neutral-900 py-12">
            <div className="w-full overflow-x-auto pb-6 pl-6 scrollbar-hide">
                <div className="flex gap-4 w-max">
                    {items.map((item) => (
                        <div key={item.title} className="relative w-72 h-96 rounded-2xl overflow-hidden shrink-0 group cursor-pointer">
                            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" alt={item.title} />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white text-xl font-bold uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
