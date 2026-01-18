"use client";

import { motion } from "motion/react";
import { BiLock } from "react-icons/bi";

export default function AccountLockedCard() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden max-w-sm w-full"
            >
                <div className="bg-red-500 h-28 flex items-center justify-center relative">
                    <div className="absolute -bottom-8 bg-white dark:bg-neutral-800 p-2 rounded-full">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center text-red-600 dark:text-red-400">
                            <BiLock className="w-8 h-8" />
                        </div>
                    </div>
                </div>

                <div className="pt-12 pb-8 px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                        This account is locked. Please contact your administrator to regain access.
                    </p>

                    <div className="border-t border-gray-100 dark:border-neutral-700 pt-6 space-y-3">
                        <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline text-sm block w-full">
                            Visit Help Center
                        </button>
                        <button className="text-gray-400 dark:text-gray-500 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 block w-full">
                            Cancel
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
