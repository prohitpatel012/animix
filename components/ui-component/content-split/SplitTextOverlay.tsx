"use client";

export default function SplitTextOverlay() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2600" className="w-full h-full object-cover" alt="Meeting" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center">
                        <div className="p-12 max-w-2xl">
                            <h2 className="text-4xl font-bold text-white mb-6">Powering the world's best teams</h2>
                            <p className="text-lg text-neutral-300 mb-8">
                                Join over 10,000+ companies that use our platform to drive growth and innovation.
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-neutral-100 transition-colors">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
