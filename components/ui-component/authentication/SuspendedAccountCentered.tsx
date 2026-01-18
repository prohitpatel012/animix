"use client";

import { BiCommentError } from "react-icons/bi";

export default function SuspendedAccountCentered() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 font-sans text-center">
            <div className="w-full max-w-md">
                <div className="mb-6">
                    <BiCommentError className="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto" />
                </div>

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">Account Suspended</h1>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 px-8">
                    Please contact support for more information regarding your account status.
                </p>

                <div className="flex justify-center gap-4 text-sm font-medium">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Help & Support
                    </a>
                    <span className="text-neutral-300 dark:text-neutral-700">|</span>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}
