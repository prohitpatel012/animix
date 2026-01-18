"use client";

import { motion } from "motion/react";
import { BiErrorCircle } from "react-icons/bi";

export default function SuspendedAccountImageOverlay() {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517817748493-49ec54a32465?auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" />
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 max-w-lg w-full bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-10 text-center text-white shadow-2xl"
            >
                <div className="w-24 h-24 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                    <BiErrorCircle className="w-12 h-12 text-red-500" />
                </div>

                <h2 className="text-3xl font-bold mb-4">Access Restricted</h2>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
                    <p className="text-red-200 text-sm">
                        This account has been flagged for policy violations.
                    </p>
                </div>

                <p className="text-white/60 mb-8 leading-relaxed">
                    You can no longer access the platform. If you believe this is an error, you may submit an appeal request to our Trust & Safety team.
                </p>

                <div className="flex gap-4 flex-col sm:flex-row">
                    <button className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg">
                        Submit Appeal
                    </button>
                    <button className="flex-1 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium rounded-xl transition-colors">
                        Review Policies
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
