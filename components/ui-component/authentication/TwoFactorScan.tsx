"use client";

import { BiScan } from "react-icons/bi";

export default function TwoFactorScan() {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Setup Two-Factor Authentication
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Scan the QR code below with your authenticator app.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 px-6 py-12 shadow sm:rounded-lg sm:px-12 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center">
                    <div className="aspect-square w-48 bg-white border-2 border-neutral-200 p-2 rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Placeholder QR Code */}
                        <div className="absolute inset-0 bg-neutral-900/5 dark:bg-neutral-900/20" />
                        <BiScan className="w-16 h-16 text-neutral-400" />
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-20">
                            {[...Array(36)].map((_, i) => <div key={i} className="bg-black" />)}
                        </div>
                    </div>

                    <div className="mt-8 w-full">
                        <label htmlFor="code" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Enter verification code
                        </label>
                        <div className="mt-2 flex gap-2">
                            <input
                                type="text"
                                name="code"
                                id="code"
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                placeholder="000 000"
                            />
                            <button
                                type="button"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                            >
                                Verify
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-xs text-neutral-500 dark:text-neutral-400 text-center">
                        <p>Can't scan the code? <a href="#" className="text-indigo-600 hover:text-indigo-500">Enter setup key manually</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
