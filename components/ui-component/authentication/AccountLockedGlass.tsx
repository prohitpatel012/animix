"use client";

import { motion } from "motion/react";
import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedGlass() {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[30px] shadow-2xl max-w-md w-full text-center relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 blur-[60px] rounded-full point-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/30 blur-[60px] rounded-full point-events-none" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10"
                >
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-lg">
                        <BiLockAlt className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3">Locked</h2>
                    <p className="text-blue-100/70 text-sm mb-8">
                        Your account is currently unavailable.
                    </p>

                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3.5 rounded-2xl transition-all shadow-lg backdrop-blur-md">
                        Contact Support
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
