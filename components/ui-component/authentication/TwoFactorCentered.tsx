"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorCentered() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 text-center">
            <div className="w-full max-w-sm space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-900 dark:text-white mb-2">
                    <BiShield className="w-6 h-6" />
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Enter confirmation code</h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
                        Enter the 6-digit code we sent to your email.
                    </p>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-center text-lg tracking-widest dark:text-white"
                        placeholder="123456"
                    />

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                        Continue
                    </button>
                </form>

                <p className="text-xs text-gray-400">
                    Secure 256-bit encrypted verification.
                </p>
            </div>
        </div>
    )
}
