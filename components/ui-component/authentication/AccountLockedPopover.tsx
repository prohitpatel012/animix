"use client";

import { motion } from "motion/react";

export default function AccountLockedPopover() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-900 p-4">
            <div className="relative">
                {/* Popover Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white dark:bg-neutral-800 transform rotate-45 border-b border-r border-neutral-200 dark:border-neutral-700" />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 w-72 text-center"
                >
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">!</span>
                    </div>

                    <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-2">Locked</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                        Maximum login attempts exceeded for this account.
                    </p>

                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                        Dismiss
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
