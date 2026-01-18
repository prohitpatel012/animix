"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function LockScreen() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 w-full max-w-sm text-center shadow-2xl">
                <div className="relative mx-auto w-24 h-24 rounded-full border-4 border-white/30 p-1 mb-6">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="User"
                        className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">Emily Doe</h2>
                <p className="text-indigo-100 text-sm mb-8">Session Locked</p>

                <form className="relative group">
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full bg-white/20 border border-white/30 rounded-full py-3 pl-6 pr-12 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                    <button className="absolute right-2 top-2 p-1.5 bg-white text-indigo-600 rounded-full shadow-lg hover:scale-110 transition-transform">
                        <BiRightArrowAlt className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-8">
                    <button className="text-white/60 text-sm hover:text-white transition-colors">
                        Switch User
                    </button>
                </div>
            </div>
        </div>
    )
}
