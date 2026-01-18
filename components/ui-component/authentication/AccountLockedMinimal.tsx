"use client";

import { BiLock } from "react-icons/bi";

export default function AccountLockedMinimal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4">
            <div className="max-w-md w-full">
                <BiLock className="w-12 h-12 text-black dark:text-white mb-6" />

                <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                    Locked out.
                </h1>

                <div className="h-1 w-20 bg-black dark:bg-white mb-8" />

                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12">
                    We've secured your account due to suspicious login attempts.
                    Confirm your identity to unlock.
                </p>

                <div className="flex gap-8">
                    <a href="#" className="text-black dark:text-white font-bold border-b-2 border-black dark:border-white hover:opacity-70 transition-opacity">
                        Unlock Account
                    </a>
                    <a href="#" className="text-neutral-400 font-bold hover:text-black dark:hover:text-white transition-colors">
                        Help me
                    </a>
                </div>
            </div>
        </div>
    )
}
