"use client";

import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedLuxury() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-8">
            <div className="max-w-md w-full text-center border px-12 py-16 border-[#c5a059] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] px-4">
                    <BiLockAlt className="w-8 h-8 text-[#c5a059]" />
                </div>

                <h2 className="text-3xl text-[#c5a059] font-serif uppercase tracking-[0.2em] mb-4">Restricted</h2>
                <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-8" />

                <p className="text-[#e5e5e5] font-serif italic mb-12 leading-loose">
                    "Access is temporarily unavailable regarding this account credentials."
                </p>

                <div className="space-y-4">
                    <button className="w-full py-4 bg-[#c5a059] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#d6b066] transition-colors">
                        Verify Ownership
                    </button>

                    <button className="w-full py-4 border border-[#c5a059] text-[#c5a059] uppercase tracking-widest text-xs hover:bg-[#c5a059] hover:text-black transition-all duration-300">
                        Concierge Support
                    </button>
                </div>
            </div>
        </div>
    )
}
