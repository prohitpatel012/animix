"use client";

export default function VideoHero() {
    return (
        <div className="relative bg-neutral-900 pb-16 pt-32 sm:pb-24 sm:pt-48 lg:pb-32 xl:pb-36">
            <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2812&q=80" alt="" />
                <div className="absolute inset-0 bg-neutral-900/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40" />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Visual Storytelling</h1>
                <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-2xl mx-auto">
                    Capture your audience's attention instantly with a high-impact video introduction.
                </p>
                <div className="mt-10">
                    <div className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl ring-1 ring-white/20 group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
                            <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2600" className="w-full h-full object-cover" alt="Video placeholder" />
                    </div>
                </div>
            </div>
        </div>
    )
}
