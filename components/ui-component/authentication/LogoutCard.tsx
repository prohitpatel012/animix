"use client";

import { motion } from "motion/react";
import { BiLogOut } from "react-icons/bi";

export default function LogoutCard() {
    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-black w-full max-w-sm rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="h-32 bg-gradient-to-r from-orange-400 to-rose-500 relative flex items-center justify-center">
                    <div className="w-20 h-20 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center absolute -bottom-10 shadow-lg border-4 border-white dark:border-black">
                        <BiLogOut className="w-8 h-8 text-rose-500" />
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Logged Out</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8">
                        Your session has been terminated securely.
                    </p>

                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
                        Return to Sign In
                    </button>

                    <button className="mt-4 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        Close Window
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
