"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountBrutalist() {
    return (
        <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4">
            <div className="bg-white border-8 border-black p-8 max-w-xl w-full rotate-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-4 font-black uppercase text-3xl mb-8 flex justify-between items-center">
                    <span>Suspended</span>
                    <BiBlock className="w-8 h-8" />
                </div>

                <h1 className="text-6xl font-black mb-6 uppercase leading-[0.9]">
                    No Entry<br />Allowed.
                </h1>

                <p className="text-xl font-bold border-l-8 border-black pl-6 mb-8">
                    Your account has been terminated due to policy violations. This decision is final.
                </p>

                <div className="space-y-4 font-bold">
                    <div className="bg-red-500 text-white p-4 border-4 border-black uppercase text-center">
                        Appeal Period has ended
                    </div>

                    <button className="w-full bg-black text-white p-4 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase tracking-widest">
                        Exit Application
                    </button>

                    <button className="w-full bg-transparent text-black p-4 border-4 border-black hover:bg-black hover:text-white transition-colors uppercase tracking-widest">
                        Download My Data
                    </button>
                </div>
            </div>
        </div>
    )
}
