"use client";

import { motion } from "motion/react";
import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkAbstract() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-sm bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-3xl"
            >
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-6 text-center">
                    Magic Access
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="p-4 bg-white/5 rounded-full border border-white/10">
                        <BiEnvelope className="w-8 h-8 text-white" />
                    </div>
                </div>

                <p className="text-neutral-400 text-center text-sm mb-8">
                    Enter your portal ID (email) to receive a one-time access token.
                </p>

                <form className="space-y-4">
                    <div className="relative group">
                        <input
                            type="email"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                            placeholder="user@portal.io"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity" />
                    </div>

                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-900/50 hover:shadow-purple-900/80 hover:scale-[1.02] transition-all">
                        Generate Link
                    </button>
                </form>
            </motion.div>
        </div>
    )
}
