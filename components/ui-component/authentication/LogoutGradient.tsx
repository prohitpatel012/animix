"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutGradient() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-white">
                    <BiLogOut className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-4">
                    Session Ended
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    You've securely logged out of your account. Your data is safe with us.
                </p>

                <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                    Relogin Now
                </button>
            </div>
        </div>
    )
}
