"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutSidebar() {
    return (
        <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-900 border-t-4 border-red-500">
            {/* Sidebar Content */}
            <div className="w-full md:w-[450px] bg-white dark:bg-neutral-800 flex flex-col justify-center p-12 shadow-xl z-10">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-2xl flex items-center justify-center mb-8">
                    <BiLogOut className="w-8 h-8" />
                </div>

                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Logged Out
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                    You have successfully ended your secure session. For your protection, please close any open browser windows if you are on a public computer.
                </p>

                <div className="space-y-4">
                    <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                        Log In
                    </button>
                    <button className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white py-4 rounded-lg font-bold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                        Return Home
                    </button>
                </div>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 relative">
                <img
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2670&auto=format&fit=crop"
                    alt="Logout Background"
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                />
            </div>
        </div>
    )
}
