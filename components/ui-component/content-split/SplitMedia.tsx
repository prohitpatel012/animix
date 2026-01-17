"use client";

import { BiPlayCircle } from "react-icons/bi";

export default function SplitMedia() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden group cursor-pointer border border-white/10">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Thumb" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BiPlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform" />
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        New Feature
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Interactive streaming at scale</h2>
                    <p className="text-xl text-neutral-400 leading-relaxed">
                        Deliver ultra-low latency video to millions of concurrent viewers. Our global edge network ensures buffering is a thing of the past.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-500">Start Free Trial</button>
                        <button className="text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
