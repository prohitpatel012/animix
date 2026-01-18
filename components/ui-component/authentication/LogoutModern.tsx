"use client";

import { motion } from "motion/react";

export default function LogoutModern() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-8"
                >
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                        alt="User"
                        className="w-24 h-24 rounded-full mx-auto border-4 border-white/10 shadow-lg object-cover mb-4"
                    />
                    <h2 className="text-2xl font-bold text-white mb-1">Goodbye, Sarah!</h2>
                    <p className="text-neutral-400 text-sm">You have been logged out.</p>
                </motion.div>

                <div className="space-y-3">
                    <button className="w-full py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-200 transition-colors shadow-lg">
                        Sign In as Different User
                    </button>
                    <button className="w-full py-4 bg-white/5 text-white border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors">
                        Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    )
}
