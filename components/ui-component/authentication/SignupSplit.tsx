"use client";

import { BiCheck } from "react-icons/bi";

export default function SignupSplit() {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Marketing */}
            <div className="hidden lg:flex flex-1 relative bg-indigo-900 text-white flex-col justify-between p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10">
                    <span className="text-2xl font-bold tracking-tight">Animix</span>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Start building your dream project today.</h1>
                    <p className="text-indigo-200 text-lg mb-8">
                        Join over 10,000 developers who use our platform to ship faster and better.
                    </p>
                    <ul className="space-y-4">
                        {['Unlimited public projects', 'Community support', 'Free SSL certificates'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="flex-none rounded-full bg-indigo-500/20 p-1">
                                    <BiCheck className="w-5 h-5 text-indigo-300" />
                                </div>
                                <span className="text-indigo-100">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 text-xs text-indigo-300">
                    Â© 2024 Animix Inc. All rights reserved.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-neutral-950">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                        Get started for free
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        No credit card required. Cancel anytime.
                    </p>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Work Email
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
                            <label htmlFor="company" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
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
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                            >
                                Sign up
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
        </div>
    )
}
