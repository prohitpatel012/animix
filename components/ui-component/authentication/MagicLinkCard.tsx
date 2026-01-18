"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkCard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-4">
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl max-w-md w-full p-8 border border-neutral-200 dark:border-neutral-800">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4">
                        <BiEnvelope className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Check your email</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                        We sent a magic link to <br />
                        <span className="font-semibold text-neutral-900 dark:text-white">sarah@example.com</span>
                    </p>
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                        Open Email App
                    </button>

                    <button className="w-full py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                        Click here if you didn't receive it
                    </button>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center">
                    <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        ← Back to sign in
                    </a>
                </div>
            </div>
        </div>
    )
}
