"use client";

import { motion } from "motion/react";
import { BiShield } from "react-icons/bi";

export default function TwoFactorPopover() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 p-4">
            <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-sm w-full transform -rotate-2 scale-100 transition-all duration-300 border border-neutral-100 dark:border-neutral-800"
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Verify Identity</h2>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className="mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Open your authenticator app to view your code.
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="flex gap-2 justify-between">
                        {[1, 2, 3, 4].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-14 h-14 bg-white dark:bg-neutral-900 border-2 border-neutral-100 dark:border-neutral-700 rounded-xl text-center text-xl font-bold focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all dark:text-white"
                            />
                        ))}
                    </div>

                    <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold mt-4 hover:opacity-90 transition-opacity">
                        Confirm
                    </button>
                </form>
            </motion.div>
        </div>
    )
}
