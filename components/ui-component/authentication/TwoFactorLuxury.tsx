"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorLuxury() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="bg-[#0a0a0a] border border-[#d4af37]/30 p-12 max-w-lg w-full text-center relative shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 border border-[#d4af37]/30 py-1">
                    <span className="text-[#d4af37] text-xl font-serif">♔</span>
                </div>

                <h2 className="text-3xl font-serif text-[#d4af37] mb-2 uppercase tracking-[0.2em]">Exquisite</h2>
                <p className="text-[#d4af37]/60 text-xs mb-12 tracking-[0.3em] uppercase">Two-Factor Authentication</p>

                <div className="mb-10 flex justify-center gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-12 h-16 bg-transparent border-b border-[#d4af37]/30 text-center text-[#d4af37] text-2xl font-serif focus:border-[#d4af37] outline-none transition-colors"
                        />
                    ))}
                </div>

                <button className="w-full bg-[#d4af37] text-black font-serif font-bold py-4 uppercase tracking-widest hover:bg-[#b5952f] transition-colors">
                    Proceed
                </button>
            </div>
        </div>
    )
}
