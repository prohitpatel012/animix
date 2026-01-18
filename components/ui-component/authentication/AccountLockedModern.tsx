"use client";

import { motion } from "motion/react";
import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedModern() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-md bg-stone-900/80 backdrop-blur-xl border border-stone-800 rounded-3xl p-8"
            >
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                    <BiLockAlt className="w-7 h-7 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Account Frozen</h2>
                <p className="text-stone-400 text-sm mb-8 leading-relaxed">
                    We've detected unusual activity on your account. To prevent unauthorized access, we've temporarily disabled login.
                </p>

                <div className="space-y-4">
                    <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-stone-200 transition-colors">
                        Unlock Account
                    </button>
                    <button className="w-full py-4 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
