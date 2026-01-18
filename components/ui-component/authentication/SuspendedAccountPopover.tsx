"use client";

import { motion } from "motion/react";
import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountPopover() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-4">
            <div className="relative">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 w-80"
                >
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                            <BiBlock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Suspended</h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                                This account has been suspended for violating our usage policies.
                            </p>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold py-2 rounded">
                                    Appeal
                                </button>
                                <button className="flex-1 border border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 text-xs font-bold py-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-700">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
