"use client";

import { motion } from "motion/react";

export default function LogoutPopover() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-4">
            <div className="relative">
                {/* Popover Arrow */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4 bg-white dark:bg-neutral-800 transform rotate-45 border-t border-l border-neutral-200 dark:border-neutral-700" />

                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 text-center w-64"
                >
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Signed Out</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                        Confirming you are now offline.
                    </p>

                    <button className="w-full bg-blue-600 text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors">
                        Okay, got it
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
