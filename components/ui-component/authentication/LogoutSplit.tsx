"use client";

import { BiLogOut, BiCheckCircle } from "react-icons/bi";

export default function LogoutSplit() {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24">
                <div className="max-w-md w-full mx-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="h-8 w-8 bg-indigo-600 rounded-lg"></span>
                        <span className="text-xl font-bold dark:text-white">Brand</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
                        <BiCheckCircle /> Successfully Logged Out
                    </div>

                    <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        See you next time!
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        You have securely logged out of your account. We hope to see you back soon.
                    </p>

                    <div className="space-y-4">
                        <button className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg hover:shadow-indigo-600/20">
                            Log In Again
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-neutral-500">
                        Need help? <a href="#" className="text-indigo-600 hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-1/2 relative bg-neutral-100 dark:bg-neutral-900">
                <img
                    src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2670&auto=format&fit=crop"
                    alt="Logout"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply" />
            </div>
        </div>
    )
}
