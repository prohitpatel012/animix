"use client";

import { motion } from "motion/react";

export default function MagicLinkPopover() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 p-4">
            <div className="relative">
                {/* Popover Arrow */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white dark:bg-neutral-900 transform rotate-45 -translate-y-1/2 border-l border-b border-neutral-200 dark:border-neutral-800" />

                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="relative bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-2xl max-w-sm w-full border border-neutral-200 dark:border-neutral-800"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-neutral-900 dark:text-white">Quick Login</h2>
                        <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white">×</button>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Email</label>
                            <input
                                type="email"
                                className="w-full bg-neutral-50 dark:bg-neutral-800 border-none rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="name@domain.com"
                            />
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                            Send Login Link
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
