"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutSimple() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
            <div className="max-w-md w-full space-y-8 text-center p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                <div className="mx-auto h-16 w-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center">
                    <BiLogOut className="h-8 w-8" />
                </div>

                <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                    You have been signed out
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Thank you for using our service. You can safely close this window, or sign back in below.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                    <button className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Sign In Again
                    </button>
                    <button className="w-full flex justify-center py-3 px-4 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-md text-neutral-700 dark:text-white bg-white dark:bg-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
}
