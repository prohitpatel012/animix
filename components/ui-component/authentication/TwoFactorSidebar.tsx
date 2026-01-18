"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorSidebar() {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            {/* Sidebar */}
            <div className="w-full md:w-[450px] flex flex-col justify-center p-8 md:p-12 shadow-2xl z-20 bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800">
                <div className="w-full max-w-sm mx-auto">
                    <div className="mb-10">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                            <BiShield className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Two-Step Verification</h1>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            We've sent a verification code to your device.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Security Code</label>
                            <div className="flex gap-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength={1}
                                        className="w-full h-14 text-center text-xl font-bold rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-indigo-600 focus:bg-white dark:focus:bg-neutral-900 outline-none transition-all dark:text-white"
                                    />
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none">
                            Verify Identity
                        </button>

                        <div className="text-center pt-4">
                            <button type="button" className="text-sm font-medium text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400">
                                I didn't receive the code
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 relative bg-neutral-100 dark:bg-neutral-950">
                <img
                    src="https://images.unsplash.com/photo-1614064641938-3bcee529cfae?q=80&w=2670&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-[2px]" />
                <div className="absolute bottom-12 left-12 right-12 text-white p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-lg font-medium">"Security is not just a feature, it's our promise to you."</p>
                </div>
            </div>
        </div>
    )
}
