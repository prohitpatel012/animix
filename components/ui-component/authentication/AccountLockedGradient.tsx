"use client";

import { BiLock } from "react-icons/bi";

export default function AccountLockedGradient() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-sm p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-white">
                    <BiLock className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4">
                    Locked Out
                </h2>

                <p className="text-gray-500 mb-8 font-medium">
                    Too many failed attempts. Please try again later.
                </p>

                <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-8 font-mono text-sm border border-red-100">
                    RETRY_AFTER: 59:20
                </div>

                <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                    Back to Safety
                </button>
            </div>
        </div>
    )
}
