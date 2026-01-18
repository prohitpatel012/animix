"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkGradient() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center transform transition-all hover:scale-[1.01]">
                <div className="w-20 h-20 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <BiEnvelope className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Check your inbox</h2>
                <p className="text-gray-500 mb-8">
                    We've sent a magic login link to the email provided.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
                    <p className="text-blue-800 font-medium break-all">username@company.com</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95">
                        Close This Tab
                    </button>
                    <button className="w-full py-3.5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                        Re-enter Email
                    </button>
                </div>
            </div>
        </div>
    )
}
