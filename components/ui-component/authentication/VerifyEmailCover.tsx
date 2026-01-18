"use client";

import { BiArrowBack } from "react-icons/bi";

export default function VerifyEmailCover() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-neutral-950">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <a href="#" className="flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-8">
                        <BiArrowBack className="mr-2" /> Back to log in
                    </a>

                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Verify your email</h2>
                    <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                        We've successfully created your account. One last step to get started!
                    </p>

                    <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-md border border-indigo-100 dark:border-indigo-900/50">
                        <p className="text-sm text-indigo-800 dark:text-indigo-200">
                            Verification link sent to: <br />
                            <span className="font-semibold">alex.smith@example.com</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Didn't receive the email?</h3>
                        <ul className="mt-4 list-disc list-inside text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
                            <li>Check your spam or junk folder</li>
                            <li>Wait 5-10 minutes if the server is busy</li>
                            <li>Check if the email provided is correct</li>
                        </ul>

                        <button className="mt-8 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Click to resend
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
                    alt=""
                />
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col justify-end p-16 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-4xl font-bold">Secure & Reliable</h2>
                    <p className="mt-4 text-lg text-neutral-300 max-w-xl">
                        Your security is our top priority. We use industry-standard encryption to protect your data.
                    </p>
                </div>
            </div>
        </div>
    )
}
