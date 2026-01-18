"use client";

import { motion } from "motion/react";

export default function MagicLinkImageOverlay() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center p-4">
            <div className="absolute inset-0 bg-neutral-900/60 transition-opacity" />

            <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Passwordless Access</h2>
                    <p className="text-white/80 text-sm">
                        Enter your email to receive a secure login link.
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-white/70">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:bg-black/40 focus:border-white/50 outline-none transition-colors"
                            placeholder="name@work.com"
                        />
                    </div>

                    <button className="w-full bg-white text-neutral-900 font-bold py-3 rounded-lg hover:bg-neutral-100 transition-colors">
                        Send Link
                    </button>

                    <p className="text-xs text-center text-white/50 pt-2">
                        We'll never share your email with anyone else.
                    </p>
                </form>
            </div>
        </div>
    )
}
