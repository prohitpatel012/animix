"use client";

import { BiCheckCircle } from "react-icons/bi";

export default function ResetPasswordCover() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-neutral-950">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                        Reset Password
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        Choose a strong password for your account.
                    </p>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Confirm New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                            >
                                Change Password
                            </button>
                        </div>
                    </form>

                    <ul className="mt-8 space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><BiCheckCircle className="text-green-500" /> 8 characters minimum</li>
                        <li className="flex items-center gap-2"><BiCheckCircle className="text-neutral-300" /> One number</li>
                        <li className="flex items-center gap-2"><BiCheckCircle className="text-neutral-300" /> One symbol</li>
                    </ul>
                </div>
            </div>

            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                />
                <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply" />
            </div>
        </div>
    )
}
