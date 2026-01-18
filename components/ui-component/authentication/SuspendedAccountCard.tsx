"use client";

import { motion } from "motion/react";
import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountCard() {
    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden max-w-sm w-full"
            >
                <div className="bg-neutral-900 h-32 flex items-center justify-center relative">
                    <h2 className="text-white font-mono text-xl tracking-widest uppercase">Suspended</h2>
                </div>

                <div className="relative px-8 pb-8 pt-12 text-center">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center border-8 border-neutral-100 dark:border-neutral-900">
                        <BiBlock className="w-8 h-8 text-neutral-400" />
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">John Doe</h3>
                    <p className="text-neutral-500 text-sm mb-6">@johndoe • ID: 882910</p>

                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg p-3 mb-6">
                        <p className="text-xs text-red-600 dark:text-red-400 font-medium leading-relaxed">
                            This user profile is currently unavailable due to an active suspension.
                        </p>
                    </div>

                    <button className="w-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-white font-semibold py-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-sm">
                        Back to Dashboard
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
