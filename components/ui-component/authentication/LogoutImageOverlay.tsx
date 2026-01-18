"use client";

import { motion } from "motion/react";
import { BiLogOut } from "react-icons/bi";

export default function LogoutImageOverlay() {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm" />
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative z-10 max-w-md w-full bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-10 text-center shadow-2xl"
            >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <BiLogOut className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">Signed Out</h2>
                <p className="text-white/80 mb-8">
                    We hope to see you again soon.
                </p>

                <div className="space-y-3">
                    <button className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                        Re-Login
                    </button>
                    <button className="w-full py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
                        Go to Support
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
