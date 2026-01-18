"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutLuxury() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-8">
            <div className="max-w-md w-full text-center border px-12 py-16 border-[#9d8c6b] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4">
                    <BiLogOut className="w-8 h-8 text-[#9d8c6b]" />
                </div>

                <h2 className="text-3xl text-[#9d8c6b] font-serif uppercase tracking-[0.2em] mb-4">Au Revoir</h2>
                <div className="w-12 h-[1px] bg-[#9d8c6b] mx-auto mb-8" />

                <p className="text-[#a8a8a8] font-serif italic mb-12">
                    "Until we meet again."
                </p>

                <button className="w-full py-4 border border-[#9d8c6b] text-[#9d8c6b] uppercase tracking-widest text-xs hover:bg-[#9d8c6b] hover:text-[#050505] transition-all duration-500">
                    Sign In
                </button>
            </div>
        </div>
    )
}
