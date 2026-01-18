"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkCentered() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4">
            <div className="w-full max-w-sm text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                    <BiEnvelope className="w-6 h-6" />
                </div>

                <h1 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Sign in with email</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                    Enter your email to receive a login link.
                </p>

                <form className="space-y-4">
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-neutral-900 dark:text-white placeholder-neutral-400"
                        placeholder="name@example.com"
                    />
                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
                        Continue
                    </button>
                </form>
            </div>
        </div>
    )
}
