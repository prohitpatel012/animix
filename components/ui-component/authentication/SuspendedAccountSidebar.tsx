"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountSidebar() {
    return (
        <div className="min-h-screen flex flex-row-reverse bg-neutral-50 dark:bg-neutral-900 border-t-4 border-red-600">
            {/* Sidebar Content */}
            <div className="w-full md:w-[480px] bg-white dark:bg-neutral-800 flex flex-col justify-center p-12 shadow-xl z-10">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mb-8">
                    <BiBlock className="w-8 h-8" />
                </div>

                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Account Suspended
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                    Your account has been suspended indefinitely. This means you can no longer log in or use our services.
                </p>

                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg mb-8 border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2">Reason:</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm">
                        Multiple reports of community guideline violations.
                    </p>
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                        Submit Appeal
                    </button>
                    <button className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white py-4 rounded-lg font-bold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 relative bg-neutral-900">
                <div className="absolute inset-0 bg-red-900/40 mix-blend-overlay z-10" />
                <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
                    alt="Barbed Wire"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
                />
            </div>
        </div>
    )
}
