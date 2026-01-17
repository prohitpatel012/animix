"use client";

const features = [
    { title: "Design", desc: "Create stunning visuals.", img: "https://images.unsplash.com/photo-1558655146-d09347e0c7a8?auto=format&fit=crop&w=800&q=80" },
    { title: "Develop", desc: "Build with modern tools.", img: "https://images.unsplash.com/photo-1461988320302-91b5b4c61e69?auto=format&fit=crop&w=800&q=80" },
]

export default function SplitZigZag() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
                {features.map((item, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-neutral-100">
                                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{item.title}</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">{item.desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
