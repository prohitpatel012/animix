"use client";

import { BiLogoGoogle, BiWind } from "react-icons/bi";

export default function LoginSplit() {
    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-950">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                            <BiWind className="h-8 w-8" />
                            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Animix</span>
                        </div>
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                            Not a member?{' '}
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>

                    <div className="mt-10">
                        <div>
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
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-600 dark:bg-neutral-900 dark:border-neutral-700"
                                        />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white dark:bg-neutral-950 px-6 text-neutral-900 dark:text-neutral-400">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                                    <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Sign in with Google</span>
                                </a>
                                <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">SSO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                />
                <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
            </div>
        </div>
    )
}
