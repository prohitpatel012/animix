"use client";

import { motion } from "motion/react";
import { BiShield } from "react-icons/bi";

export default function TwoFactorAbstract() {
    return (
        <div className="min-h-screen items-center justify-center flex bg-neutral-900 overflow-hidden relative p-4">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />

            <div className="relative z-10 w-full max-w-sm bg-neutral-800/50 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50" />
                        <div className="relative w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 text-white">
                            <BiShield className="w-8 h-8" />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-white mb-2">Authenticator</h2>
                <p className="text-center text-neutral-400 text-sm mb-8">
                    Enter the time-based code from your device.
                </p>

                <form className="space-y-6">
                    <div className="flex justify-center gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-10 h-14 bg-neutral-900/50 border border-white/10 rounded-lg text-center text-xl text-white focus:border-blue-500 focus:bg-blue-500/10 outline-none transition-all placeholder-white/10"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                        Verify
                    </button>
                </form>
            </div>
        </div>
    )
}
