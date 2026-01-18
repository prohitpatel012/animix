"use client";

import { BiLockAlt, BiErrorCircle } from "react-icons/bi";

export default function AccountLockedSplit() {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 border-r border-neutral-100 dark:border-neutral-800">
                <div className="max-w-md w-full mx-auto">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-xl flex items-center justify-center mb-8 shadow-sm">
                        <BiLockAlt className="w-7 h-7" />
                    </div>

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        Security Alert
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                        For your protection, we've locked your account after multiple incorrect password entries.
                    </p>

                    <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-4 mb-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <BiErrorCircle className="h-5 w-5 text-red-500" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                                    Next attempt allowed at 04:30 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <button className="w-full py-4 px-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:opacity-90 transition-opacity">
                            Contact Support
                        </button>
                        <button className="w-full py-4 px-6 rounded-xl border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
                            Go Home
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0 bg-neutral-900/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
                    alt="Security"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-20">
                    <h2 className="text-2xl font-bold mb-2">Our top priority is your security.</h2>
                    <p className="text-white/70">
                        We use advanced algorithms to detect suspicious activity and protect your personal information.
                    </p>
                </div>
            </div>
        </div>
    )
}
