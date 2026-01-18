"use client";

import { BiLock } from "react-icons/bi";

export default function AccountLockedSidebar() {
    return (
        <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-900 border-t-4 border-orange-500">
            {/* Sidebar Content */}
            <div className="w-full md:w-[480px] bg-white dark:bg-neutral-800 flex flex-col justify-center p-12 shadow-xl z-10">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                    <BiLock className="w-8 h-8" />
                </div>

                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Too many attempts
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                    To protect your account, we limit the number of times you can try to sign in. Please try again later or reset your password.
                </p>

                <div className="space-y-4">
                    <button className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">
                        Reset Password
                    </button>
                    <button className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white py-4 rounded-lg font-bold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                        Back to Sign In
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-700 text-xs text-neutral-400">
                    Reference ID: <span className="font-mono text-neutral-600 dark:text-neutral-300">#ERR_AUTH_LOCKED</span>
                </div>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 relative bg-neutral-900">
                <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay z-10" />
                <img
                    src="https://images.unsplash.com/photo-1516934557997-6a56e75e533c?q=80&w=2576&auto=format&fit=crop"
                    alt="Locked Vault"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                />
            </div>
        </div>
    )
}
