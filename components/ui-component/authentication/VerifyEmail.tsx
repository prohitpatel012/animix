"use client";

import { BiEnvelope } from "react-icons/bi";

export default function VerifyEmail() {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/10 sm:h-20 sm:w-20">
                    <BiEnvelope className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Check your email</h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    We've sent a verification link to <strong className="text-neutral-900 dark:text-white">user@example.com</strong>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 px-4 py-8 sm:px-10">
                    <p className="text-center text-sm text-neutral-600 dark:text-neutral-300 mb-6">
                        Click the link in the email we verified to allow you to continue. If you don't see the email, check your spam folder.
                    </p>

                    <div className="space-y-4">
                        <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                        >
                            Resend Verification Email
                        </button>
                        <a href="#" className="flex w-full justify-center text-sm font-semibold text-neutral-900 dark:text-white hover:underline">
                            Skip for now
                        </a>
                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-500">
                        Contact support if you need help.
                    </p>
                </div>
            </div>
        </div>
    )
}
