"use client";

import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedBrutalist() {
    return (
        <div className="min-h-screen bg-violet-400 flex items-center justify-center p-4">
            <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex justify-between items-start mb-8">
                    <h1 className="text-4xl font-black uppercase leading-none">Access<br />Denied!</h1>
                    <div className="bg-red-500 text-white p-2 border-2 border-black">
                        <BiLockAlt className="w-8 h-8" />
                    </div>
                </div>

                <div className="bg-black text-white p-4 font-mono font-bold text-sm mb-8">
                    ERROR: 403_FORBIDDEN
                    <br />
                    REASON: TOO_MANY_ATTEMPTS
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-red-500 text-white font-black py-4 uppercase border-4 border-black hover:bg-black hover:text-white transition-colors text-xl">
                        Retry Later
                    </button>

                    <button className="w-full bg-transparent text-black font-bold py-2 uppercase border-4 border-transparent hover:border-black active:bg-black active:text-white transition-all">
                        Contact Admin
                    </button>
                </div>
            </div>
        </div>
    )
}
