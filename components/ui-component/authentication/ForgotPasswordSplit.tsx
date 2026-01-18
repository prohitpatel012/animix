"use client";

import { BiCheck } from "react-icons/bi";

export default function ForgotPasswordSplit() {
    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-950">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-r border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                            Recover your account
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                            Enter the email associated with your account and we'll send an email with instructions to reset your password.
                        </p>
                    </div>

                    <div className="mt-10">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                                >
                                    Send instructions
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Return to sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative w-0 flex-1 bg-neutral-50 dark:bg-neutral-900">
                <div className="flex h-full flex-col justify-center px-12">
                    <div className="mx-auto max-w-lg">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Password Security Tips</h3>
                        <ul className="space-y-4">
                            {[
                                'Use at least 12 characters',
                                'Mix letters, numbers, and symbols',
                                'Avoid using personal information',
                                'Enable two-factor authentication'
                            ].map(tip => (
                                <li key={tip} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                                    <BiCheck className="text-green-500" /> {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
