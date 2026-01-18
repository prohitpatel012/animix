"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountGradient() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-red-600 via-pink-600 to-purple-600 flex items-center justify-center p-4 text-white">
            <div className="max-w-md w-full text-center">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-2xl">
                    <BiBlock className="w-16 h-16" />
                </div>

                <h1 className="text-4xl font-black mb-4 drop-shadow-lg">Banned</h1>
                <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
                    Access to this account has been permanently restricted due to severe violations of our community guidelines.
                </p>

                <div className="space-y-4">
                    <button className="w-full py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                        Contact Safety Team
                    </button>
                    <button className="w-full py-4 bg-transparent border-2 border-white font-bold rounded-full hover:bg-white/10 transition-colors">
                        Download My Data
                    </button>
                </div>
            </div>
        </div>
    )
}
