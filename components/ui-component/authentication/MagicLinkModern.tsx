"use client";

import { motion } from "motion/react";

export default function MagicLinkModern() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[10%] left-[20%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-2">
                        Magic Link
                    </h2>
                    <p className="text-neutral-400 text-sm">
                        Experience the future of authentication. No passwords, just access.
                    </p>
                </div>

                <form className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-cyan-500 focus:outline-none transition-all placeholder-neutral-500"
                        />
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl font-bold text-white shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 hover:scale-[1.02] transition-all">
                        Send Magic Link ➜
                    </button>
                </form>

                <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-xs text-neutral-500 text-center">
                        Secure • Passwordless • Instant
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
