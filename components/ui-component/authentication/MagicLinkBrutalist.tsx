"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkBrutalist() {
    return (
        <div className="min-h-screen bg-pink-400 flex items-center justify-center p-4 font-mono">
            <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <div className="flex items-start justify-between mb-8 pb-4 border-b-4 border-black">
                    <h1 className="text-4xl font-black italic">NO_PASS</h1>
                    <div className="bg-black text-white p-2 transform rotate-12">
                        <BiEnvelope className="w-8 h-8" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-yellow-300 border-2 border-black p-4 text-xs font-bold uppercase">
                        System Alert: Password requirements have been deprecated.
                    </div>

                    <div>
                        <label className="block font-black uppercase mb-2">Electronic Mail Address</label>
                        <input
                            type="email"
                            className="w-full bg-white border-4 border-black p-4 text-xl font-bold focus:bg-pink-100 focus:outline-none transition-colors placeholder:text-neutral-400"
                            placeholder="USER@DOMAIN.COM"
                        />
                    </div>

                    <button className="w-full bg-black text-white font-black py-4 uppercase text-xl border-4 border-black hover:bg-white hover:text-black transition-colors">
                        Dispatch Link
                    </button>

                    <button className="w-full bg-transparent text-black font-bold py-2 uppercase text-sm border-2 border-black hover:bg-black hover:text-white transition-colors">
                        Alternative Methods
                    </button>
                </div>
            </div>
        </div>
    )
}
