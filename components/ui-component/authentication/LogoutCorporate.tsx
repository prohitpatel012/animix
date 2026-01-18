"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutCorporate() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-neutral-800 shadow-sm border border-gray-200 dark:border-neutral-700 rounded-lg max-w-md w-full p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BiLogOut className="w-8 h-8" />
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure Logout</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    You have securely signed out of your corporate account. For security reasons, please close your browser window.
                </p>

                <div className="border-t border-gray-100 dark:border-neutral-700 pt-6">
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                        Log in as a different user
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                        <span>Help Center</span>
                        <span>•</span>
                        <span>Privacy</span>
                        <span>•</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
