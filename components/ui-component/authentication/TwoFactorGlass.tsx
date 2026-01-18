"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorGlass() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-400 to-orange-300 flex items-center justify-center p-4">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-xl max-w-md w-full">
                <div className="flex flex-col items-center text-center text-white mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-white/20">
                        <BiShield className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold drop-shadow-md">Verify It's You</h2>
                    <p className="text-white/80 mt-2 font-medium">Enter the 6-digit code we sent you.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-6 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-full aspect-[3/4] bg-white/20 border border-white/30 rounded-lg text-center text-xl font-bold text-white placeholder-white/50 focus:bg-white/30 focus:outline-none transition-all shadow-sm"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-white text-orange-500 font-bold py-3.5 rounded-xl shadow-lg hover:transform hover:scale-[1.02] transition-all">
                        Confirm Code
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <a href="#" className="text-white/80 hover:text-white font-semibold text-sm drop-shadow-sm">
                        I didn't receive a code
                    </a>
                </div>
            </div>
        </div>
    )
}
