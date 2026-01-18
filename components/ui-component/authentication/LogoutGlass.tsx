"use client";

import { motion } from "motion/react";

export default function LogoutGlass() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-rose-500 via-orange-500 to-yellow-500 flex items-center justify-center p-4">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-12 rounded-3xl shadow-xl max-w-sm w-full text-white text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur-md"
                >
                    <span className="text-3xl">👋</span>
                </motion.div>

                <h2 className="text-2xl font-bold mb-2">See you later!</h2>
                <p className="text-white/80 font-medium text-sm mb-8">
                    You've been logged out. Have a great day!
                </p>

                <button className="w-full bg-white text-orange-600 font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95">
                    Sign In
                </button>
            </div>
        </div>
    )
}
