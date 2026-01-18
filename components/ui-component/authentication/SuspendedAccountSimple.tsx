"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountSimple() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
            <div className="max-w-md w-full text-center bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-sm border-t-4 border-red-600">
                <div className="mx-auto h-20 w-20 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
                    <BiBlock className="h-10 w-10" />
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    Account Suspended
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                    We have suspended your account due to a violation of our Terms of Service.
                    If you believe this is a mistake, please contact support.
                </p>

                <div className="space-y-4">
                    <button className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                        Contact Support Team
                    </button>
                    <button className="w-full flex justify-center py-3 px-4 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-md text-neutral-700 dark:text-white bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                        Read Terms of Service
                    </button>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-700">
                    <p className="text-xs text-neutral-400">
                        Case ID: #99281-SUS
                    </p>
                </div>
            </div>
        </div>
    )
}
