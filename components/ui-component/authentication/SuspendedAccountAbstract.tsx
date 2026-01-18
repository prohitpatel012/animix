"use client";

import { motion } from "motion/react";
import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountAbstract() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-gradient-to-bl from-red-600 to-transparent rounded-full blur-[150px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-900 to-transparent rounded-full blur-[150px] opacity-20 pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-sm bg-neutral-900/60 backdrop-blur-3xl border border-white/5 p-8 rounded-3xl"
            >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <BiBlock className="w-5 h-5 text-red-500" />
                </div>

                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 mb-4">
                    Access Denied
                </h2>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                    Your account has been flagged for abnormal activity and is currently suspended pending review.
                </p>

                <div className="space-y-3">
                    <button className="w-full py-3.5 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                        Appeal Decision
                    </button>
                    <button className="w-full py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                        Support Center
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
