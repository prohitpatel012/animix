"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorSimple() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4 py-12">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center">
                    <BiShield className="w-8 h-8" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Two-Factor Authentication
                    </h2>
                    <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
                        We sent a verification code to your mobile number ending in <span className="font-semibold text-neutral-900 dark:text-white">...8832</span>
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="flex justify-center gap-2 sm:gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Verify Code
                    </button>

                    <div className="text-sm">
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Didn't receive the code?{' '}
                            <button className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Resend
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
