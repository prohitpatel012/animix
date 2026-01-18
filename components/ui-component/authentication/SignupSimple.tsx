"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function SignupSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white dark:bg-neutral-950 p-8 rounded-xl shadow-lg ring-1 ring-neutral-900/5 dark:ring-white/10">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Join thousands of users building the future.
                    </p>
                </div>

                <form className="space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>

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
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                        <p className="mt-1 text-xs text-neutral-500">Must be at least 8 characters.</p>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-600 dark:bg-neutral-900 dark:border-neutral-700"
                        />
                        <label htmlFor="terms" className="ml-3 block text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            I agree to the <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms</a> and <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                        >
                            Create Account <BiRightArrowAlt className="w-5 h-5" />
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Already have an account?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    )
}
