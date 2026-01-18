"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountMinimal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4">
            <div className="max-w-xl w-full border-l-4 border-black dark:border-white pl-8 py-4">
                <div className="flex items-center gap-4 mb-6">
                    <BiBlock className="w-8 h-8 text-neutral-400" />
                    <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Notice of Suspension</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-tight">
                    Account<br />Deactivated.
                </h1>

                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12 max-w-md">
                    We have detected activity that violates our acceptable use policy. Your account has been permanently disabled.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="text-black dark:text-white font-bold border-b-2 border-black dark:border-white hover:opacity-70 transition-opacity pb-1 text-lg self-start">
                        Browse Help Articles
                    </button>
                </div>
            </div>
        </div>
    )
}
