"use client";

import { BiLock, BiTime } from "react-icons/bi";

export default function AccountLockedSimple() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
            <div className="max-w-md w-full space-y-8 text-center bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-sm">
                <div className="mx-auto h-16 w-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center">
                    <BiLock className="h-8 w-8" />
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                        Account Locked
                    </h2>
                    <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                        Your account has been temporarily locked due to too many failed login attempts.
                    </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-md p-4 flex items-center justify-center gap-2 text-orange-800 dark:text-orange-200">
                    <BiTime className="w-5 h-5" />
                    <span className="font-medium">Try again in 30 minutes</span>
                </div>

                <div className="space-y-4">
                    <button className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Unlock with Email
                    </button>
                    <button className="w-full flex justify-center py-3 px-4 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-md text-neutral-700 dark:text-white bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Back to Login
                    </button>
                </div>

                <p className="text-xs text-neutral-400">
                    If you did not attempt to sign in, please <a href="#" className="underline">contact support</a> immediately.
                </p>
            </div>
        </div>
    )
}
