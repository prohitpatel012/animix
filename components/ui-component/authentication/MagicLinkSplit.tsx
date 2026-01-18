"use client";

import { BiEnvelope, BiArrowBack } from "react-icons/bi";

export default function MagicLinkSplit() {
    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-950">
            {/* Form Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm">
                    <button className="flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 mb-8 transition-colors">
                        <BiArrowBack className="mr-2" /> Back to Home
                    </button>

                    <div className="mb-8">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                            <BiEnvelope className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Passwordless Login
                        </h2>
                        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                            No password to remember. Just check your email.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    className="block w-full rounded-md border-0 py-2.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:ring-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600"
                        >
                            Email me a login link
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-neutral-400">
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Side */}
            <div className="hidden lg:block relative w-1/2">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1596524430615-b46476ddc6aa?q=80&w=2670&auto=format&fit=crop"
                    alt="Abstract"
                />
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply" />
            </div>
        </div>
    )
}
