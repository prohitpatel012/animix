"use client";

import { motion } from "motion/react";

export default function TwoFactorModern() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] mb-6">
                        <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">🔒</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Two-Factor Auth</h2>
                    <p className="text-neutral-400 text-center text-sm">
                        Open your authenticator app and enter the code to continue.
                    </p>
                </div>

                <div className="grid grid-cols-6 gap-2 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                            key={i}
                            type="text"
                            className="w-full aspect-[3/4] bg-white/5 border border-white/10 rounded-lg text-center text-xl text-white focus:bg-white/10 focus:border-purple-500 focus:outline-none transition-all"
                        />
                    ))}
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-[1.02] transition-all">
                    Verify & Proceed
                </button>

                <div className="mt-6 text-center">
                    <button className="text-sm text-neutral-500 hover:text-white transition-colors">
                        Try another method
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
