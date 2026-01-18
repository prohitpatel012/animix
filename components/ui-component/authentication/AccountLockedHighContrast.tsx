"use client";

import { BiLock, BiHelpCircle } from "react-icons/bi";

export default function AccountLockedHighContrast() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center p-8 border-[20px] border-white">
            <div className="max-w-4xl mx-auto w-full">
                <div className="flex items-center gap-6 mb-12">
                    <BiLock className="w-20 h-20" />
                    <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.8]">
                        Locked<br />Out.
                    </h1>
                </div>

                <div className="bg-white text-black p-8 text-2xl font-bold border-4 border-black mb-12 transform -rotate-1">
                    TOO MANY FAILED ATTEMPTS detected from your IP address.
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <button className="bg-white text-black text-xl font-black uppercase py-8 px-6 hover:bg-neutral-200 transition-colors flex items-center justify-between group">
                        Unlock Account
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                    <button className="border-4 border-white text-white text-xl font-black uppercase py-8 px-6 hover:bg-white hover:text-black transition-colors flex items-center gap-4">
                        <BiHelpCircle className="w-8 h-8" /> Help Center
                    </button>
                </div>
            </div>
        </div>
    )
}
