"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkGlass() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-400 to-indigo-500 p-4 relative">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-xl max-w-sm w-full text-white">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                        <BiEnvelope className="w-10 h-10" />
                    </div>
                </div>

                <div className="mt-12 text-center mb-8">
                    <h2 className="text-3xl font-bold drop-shadow-md">Hello!</h2>
                    <p className="text-white/80 font-medium">Enter your email to login</p>
                </div>

                <form className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-3 text-white placeholder-white/60 focus:bg-white/30 focus:outline-none transition-all shadow-sm"
                    />

                    <button className="w-full bg-white text-indigo-600 font-bold py-3.5 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
                        Get Magic Link
                    </button>
                </form>
            </div>
        </div>
    )
}
