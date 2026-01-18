"use client";

import { BiLockAlt } from "react-icons/bi";

export default function ResetPasswordSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-neutral-950">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/10">
                    <BiLockAlt className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Set new password
                </h2>
                <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Your new password must be different to previously used passwords.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
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
                        <p className="mt-1 text-xs text-neutral-500">Must be at least 8 characters</p>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Confirm Password
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
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
