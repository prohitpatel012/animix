"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function MagicLinkMinimal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4">
            <div className="w-full max-w-lg">
                <h1 className="text-5xl md:text-6xl font-black mb-12 tracking-tighter text-neutral-900 dark:text-white">
                    login.
                </h1>

                <form className="space-y-0">
                    <div className="group relative border-b-2 border-neutral-200 dark:border-neutral-800 focus-within:border-black dark:focus-within:border-white transition-colors">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            className="w-full py-4 bg-transparent text-xl md:text-2xl outline-none text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 font-medium"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 opacity-50 group-focus-within:opacity-100 hover:opacity-100 transition-opacity">
                            <BiRightArrowAlt className="w-8 h-8 text-neutral-900 dark:text-white" />
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-neutral-400 dark:text-neutral-600 text-sm">
                    Press Enter to receive your magic link.
                </p>
            </div>
        </div>
    )
}
