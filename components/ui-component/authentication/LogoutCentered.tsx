"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutCentered() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 text-center">
            <div className="w-full max-w-sm space-y-8">
                <div className="mx-auto w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                    <BiLogOut className="w-6 h-6" />
                </div>

                <div>
                    <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">Sign out complete</h1>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        You have been signed out of your account.
                    </p>
                </div>

                <a href="#" className="block w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md py-2 text-sm font-medium text-neutral-700 dark:text-white shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                    Return to Sign In
                </a>

                <p className="text-xs text-neutral-400">
                    Version 2.0.4
                </p>
            </div>
        </div>
    )
}
