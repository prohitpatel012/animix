"use client";

import { BiArrowBack } from "react-icons/bi";

export default function TwoFactorMinimal() {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-black p-4 md:p-8">
            <a href="#" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <BiArrowBack className="mr-2" /> Back
            </a>

            <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
                <div className="w-full space-y-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        Check your email
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400">
                        We sent a code to <span className="text-neutral-900 dark:text-white">e***@example.com</span>
                    </p>

                    <div className="flex gap-3 justify-center">
                        <input className="w-12 h-14 text-3xl text-center border-b-2 border-neutral-200 dark:border-neutral-800 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white font-medium placeholder-neutral-300" placeholder="0" />
                        <input className="w-12 h-14 text-3xl text-center border-b-2 border-neutral-200 dark:border-neutral-800 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white font-medium placeholder-neutral-300" placeholder="0" />
                        <input className="w-12 h-14 text-3xl text-center border-b-2 border-neutral-200 dark:border-neutral-800 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white font-medium placeholder-neutral-300" placeholder="0" />
                        <input className="w-12 h-14 text-3xl text-center border-b-2 border-neutral-200 dark:border-neutral-800 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white font-medium placeholder-neutral-300" placeholder="0" />
                    </div>

                    <div className="pt-8">
                        <button className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-4 rounded-full hover:opacity-80 transition-opacity">
                            Verify Email
                        </button>
                    </div>

                    <div className="text-sm text-neutral-500">
                        <span className="mr-1">Code expires in 10:00.</span>
                        <button className="text-neutral-900 dark:text-white font-medium underline decoration-neutral-300 hover:decoration-neutral-900 transition-all">
                            Resend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
