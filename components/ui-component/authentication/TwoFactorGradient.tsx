"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorGradient() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center">
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <BiShield className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Check your text</h2>
                <p className="text-gray-500 mb-8">
                    We sent a 6-digit code to <br />
                    <strong className="text-gray-800">+1 (555) 000-0000</strong>
                </p>

                <div className="flex justify-center gap-3 mb-8">
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                    <span className="flex items-center text-gray-300">-</span>
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                    <input className="w-12 h-14 bg-gray-50 border-b-4 border-gray-200 focus:border-indigo-500 outline-none text-center text-2xl font-bold text-indigo-600 rounded-t-lg transition-colors" maxLength={1} />
                </div>

                <div className="flex flex-col gap-3">
                    <button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95">
                        Verify Code
                    </button>
                    <button className="w-full py-3.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
                        Resend Code
                    </button>
                </div>
            </div>
        </div>
    )
}
