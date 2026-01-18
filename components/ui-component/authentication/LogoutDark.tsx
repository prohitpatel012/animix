"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutDark() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full border border-neutral-800 bg-neutral-900/50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                        <BiLogOut className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">Logged Out</h2>
                        <p className="text-sm text-neutral-500">Session ID: #8292X</p>
                    </div>
                </div>

                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                    You have been successfully logged out. To access your account again, please sign in.
                </p>

                <div className="flex gap-3">
                    <button className="flex-1 bg-white text-black py-2.5 rounded-lg font-semibold hover:bg-neutral-200 transition-colors text-sm">
                        Sign In
                    </button>
                    <button className="flex-1 bg-transparent border border-neutral-800 text-neutral-400 py-2.5 rounded-lg font-medium hover:text-white hover:border-neutral-600 transition-colors text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
