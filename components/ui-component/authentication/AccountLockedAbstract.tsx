"use client";

import { motion } from "motion/react";
import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedAbstract() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-gradient-to-tr from-rose-900 to-indigo-900 rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-sm bg-black/40 backdrop-blur-3xl border border-white/5 p-8 rounded-3xl"
            >
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-rose-900/50">
                    <BiLockAlt className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 mb-4">
                    Account Frozen
                </h2>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                    Security protocols have initiated a temporary lock on your account due to unrecognized login patterns.
                </p>

                <div className="space-y-3">
                    <button className="w-full py-3.5 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                        Authenticate
                    </button>
                    <button className="w-full py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                        View Details
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
