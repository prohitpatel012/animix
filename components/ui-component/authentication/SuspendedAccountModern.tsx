"use client";

import { motion } from "motion/react";
import { BiErrorCircle } from "react-icons/bi";

export default function SuspendedAccountModern() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Beams */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative z-10 w-full max-w-lg bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-10 shadow-2xl"
            >
                <div className="flex flex-col items-center">
                    <div className="p-3 bg-red-500/10 rounded-full mb-6 ring-1 ring-red-500/50">
                        <BiErrorCircle className="w-8 h-8 text-red-500" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">Account Action Required</h2>
                    <p className="text-slate-400 text-center mb-8">
                        We've suspended your account to protect your data. Please verify your identity to regain access.
                    </p>

                    <div className="w-full bg-slate-800/50 rounded-xl p-4 mb-8 border border-slate-700/50 flex gap-4 items-start">
                        <div className="w-1 h-full min-h-[40px] bg-red-500 rounded-full" />
                        <div>
                            <h4 className="text-white font-medium text-sm mb-1">Violation Detected</h4>
                            <p className="text-slate-500 text-xs">Unusual login attempts from unrecognized location.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <button className="flex-1 py-3 bg-white text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
                            Verify Identity
                        </button>
                        <button className="flex-1 py-3 bg-transparent border border-slate-700 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
