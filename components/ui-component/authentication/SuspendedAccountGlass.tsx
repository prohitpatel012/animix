"use client";

import { motion } from "motion/react";
import { BiError } from "react-icons/bi";

export default function SuspendedAccountGlass() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-neutral-900 to-black flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-900/50">
                        <BiError className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">Suspended</h2>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                        Your account is currently inactive. Please contact your administrator.
                    </p>

                    <button className="w-full bg-white text-red-900 font-bold py-4 rounded-xl shadow-lg hover:bg-neutral-200 transition-colors">
                        Contact Admin
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
