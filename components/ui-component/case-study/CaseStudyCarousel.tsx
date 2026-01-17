"use client";

const cases = [
    { title: "Project A", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Project B", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" },
    { title: "Project C", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
]

export default function CaseStudyCarousel() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16">Recent Work</h2>
                <div className="flex gap-8 overflow-x-auto pb-8 snap-x">
                    {cases.map((cs) => (
                        <div key={cs.title} className="min-w-[85vw] md:min-w-[400px] snap-center">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative group cursor-pointer">
                                <img src={cs.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm">View Project</span>
                                </div>
                            </div>
                            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{cs.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
