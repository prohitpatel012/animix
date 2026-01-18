"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkSimple() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4 py-12">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                    <BiEnvelope className="w-8 h-8" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Magic Link Login
                    </h2>
                    <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
                        Enter your email address and we'll send you a link to log in instantly.
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-700 placeholder-neutral-500 text-neutral-900 dark:text-white dark:bg-neutral-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send Magic Link
                        </button>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Log in with password instead
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
