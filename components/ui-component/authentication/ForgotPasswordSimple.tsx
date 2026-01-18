"use client";

import { BiArrowBack } from "react-icons/bi";

export default function ForgotPasswordSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Forgot password?
                </h2>
                <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    No worries, we'll send you reset instructions.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
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
                                placeholder="Enter your email"
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

                <p className="mt-10 text-center text-sm text-neutral-500">
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 flex items-center justify-center gap-2">
                        <BiArrowBack /> Back to log in
                    </a>
                </p>
            </div>
        </div>
    )
}
