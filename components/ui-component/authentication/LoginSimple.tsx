"use client";

import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook } from "react-icons/bi";

export default function LoginSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-neutral-950">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Sign in to your account
                </h2>
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
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
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
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-10">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white dark:bg-neutral-950 px-6 text-neutral-900 dark:text-neutral-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Sign in with Google</span>
                        </a>
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoGithub className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Sign in with GitHub</span>
                        </a>
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoFacebook className="h-5 w-5 text-[#1877F2]" aria-hidden="true" />
                            <span className="sr-only">Sign in with Facebook</span>
                        </a>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}
