"use client";

import { BiBlock, BiError } from "react-icons/bi";

export default function SuspendedAccountHighContrast() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center p-8">
            <div className="max-w-4xl mx-auto w-full border-l-[12px] border-white pl-8 md:pl-16 py-8">
                <div className="flex items-center gap-6 mb-8">
                    <div className="bg-white text-black p-4">
                        <BiBlock className="w-12 h-12" />
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-widest border-b-4 border-white pb-2">Status: Suspended</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-12 tracking-tighter">
                    Access<br />Blocked
                </h1>

                <p className="text-xl md:text-2xl font-bold max-w-2xl mb-12 leading-normal">
                    WE HAVE DETECTED A VIOLATION OF OUR TERMS OF SERVICE. YOUR ACCOUNT IS TERMINATED.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <button className="bg-white text-black text-xl font-black uppercase py-6 px-12 hover:bg-neutral-300 transition-colors">
                        Review Terms
                    </button>
                    <button className="bg-transparent border-4 border-white text-white text-xl font-black uppercase py-6 px-12 hover:bg-white hover:text-black transition-colors flex items-center gap-3">
                        <BiError className="w-6 h-6" /> Support
                    </button>
                </div>
            </div>
        </div>
    )
}
