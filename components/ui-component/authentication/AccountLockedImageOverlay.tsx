"use client";

import { motion } from "motion/react";
import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedImageOverlay() {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=2671&q=80')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative z-10 max-w-lg w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-center text-white shadow-2xl"
            >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                    <BiLockAlt className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-4">Security Lockdown</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                    This account has been flagged for suspicious behavior and is temporarily locked.
                    Please follow the instructions sent to your recovery email.
                </p>

                <div className="flex gap-4 flex-col sm:flex-row">
                    <button className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors">
                        Check Status
                    </button>
                    <button className="flex-1 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-xl transition-colors">
                        Contact Support
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
