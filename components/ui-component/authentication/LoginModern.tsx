"use client";

import { motion } from "motion/react";

export default function LoginModern() {
    return (
        <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1481487196290-c352beb62887?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                    <p className="text-neutral-200 mt-2">Please enter your details.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="mail@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-neutral-200 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/10 checked:bg-purple-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-purple-300 hover:text-purple-200">Forgot password?</a>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-neutral-300 text-sm">
                    Don't have an account? <a href="#" className="text-white font-bold hover:underline">Sign up for free</a>
                </div>
            </motion.div>
        </div>
    )
}
