"use client";

export default function GalleryFeatured() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
                    <div className="col-span-12 md:col-span-8 row-span-2 rounded-xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1518005052304-a32d171912dd?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Main" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold">Ethereal Mountains</h2>
                                <p>Shot in Icelandic highlands</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-4 row-span-1 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Thumb 1" />
                    </div>
                    <div className="hidden md:block col-span-4 row-span-1 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1469474932222-8d6878760780?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Thumb 2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
