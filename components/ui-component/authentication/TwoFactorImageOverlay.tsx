"use client";

import { motion } from "motion/react";
import { BiShield } from "react-icons/bi";

export default function TwoFactorImageOverlay() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center p-4">
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 w-full max-w-lg bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 text-white">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <BiShield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Secure Access</h2>
                        <p className="text-white/60 text-sm">Authentication Required</p>
                    </div>
                </div>

                <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-sm text-center text-white/80">
                        Enter the code from your authenticator app
                    </p>
                </div>

                <div className="grid grid-cols-6 gap-3 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="bg-transparent border-b-2 border-white/20 text-center text-2xl font-bold py-2 focus:border-white outline-none transition-colors"
                        />
                    ))}
                </div>

                <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 transition-colors">
                    Verify Identity
                </button>
            </div>
        </div>
    )
}
