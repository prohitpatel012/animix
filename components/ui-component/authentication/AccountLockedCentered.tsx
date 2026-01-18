"use client";

import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedCentered() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 font-sans">
            <div className="w-full max-w-md text-center">
                <div className="mx-auto w-16 h-16 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-500 rounded-full flex items-center justify-center mb-6">
                    <BiLockAlt className="w-8 h-8" />
                </div>

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">Please try again later.</h1>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xs mx-auto">
                    We've temporarily locked your account to protect your security.
                </p>

                <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 shadow-sm mb-8">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Wait time remaining:</p>
                    <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">14:59</p>
                </div>

                <button className="text-sm font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300">
                    I forgot my password
                </button>
            </div>
        </div>
    )
}
