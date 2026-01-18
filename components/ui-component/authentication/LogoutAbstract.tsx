"use client";

import { motion } from "motion/react";
import { BiLogOut } from "react-icons/bi";

export default function LogoutAbstract() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-[150px] opacity-20 pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-sm bg-neutral-900/50 backdrop-blur-3xl border border-white/5 p-8 rounded-3xl text-center"
            >
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-red-500 blur-xl opacity-30 rounded-full" />
                    <div className="relative p-4 bg-neutral-800 rounded-full border border-white/10">
                        <BiLogOut className="w-8 h-8 text-white" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">Disconnected</h2>
                <p className="text-neutral-400 text-sm mb-8">
                    Your secure connection has been closed.
                </p>

                <div className="space-y-3">
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/80 hover:scale-[1.02] transition-all">
                        Reconnect
                    </button>
                    <button className="w-full py-4 rounded-xl bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition-colors">
                        Exit Application
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
