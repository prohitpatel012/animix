"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorCard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-4">
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl max-w-md w-full p-8 border border-neutral-200 dark:border-neutral-800">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4 animate-pulse">
                        <BiShield className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Security Check</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                        Please enter the code sent to <br />
                        <span className="font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-neutral-900 dark:text-white">name@example.com</span>
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="flex justify-between gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-16 h-16 text-center text-2xl font-bold rounded-xl border-2 border-neutral-200 dark:border-neutral-800 bg-transparent focus:border-green-500 focus:ring-0 outline-none transition-colors text-neutral-900 dark:text-white"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                        Confirm
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">Having trouble?</p>
                    <div className="flex justify-center gap-4 text-sm font-medium">
                        <a href="#" className="text-neutral-900 dark:text-white hover:underline">Resend Email</a>
                        <span className="text-neutral-300">|</span>
                        <a href="#" className="text-neutral-900 dark:text-white hover:underline">Contact Support</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
