"use client";

import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

export default function LoginSocial() {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-neutral-200 dark:border-neutral-800">
                    <div className="grid grid-cols-1 gap-4">
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#DB4437] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c23321] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DB4437]">
                            <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Google</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#24292F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#24292F]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#24292F]">
                            <BiLogoGithub className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with GitHub</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#1877F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1877F2]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1877F2]">
                            <BiLogoFacebook className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Facebook</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#1DA1F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1DA1F2]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1DA1F2]">
                            <BiLogoTwitter className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Twitter</span>
                        </button>
                    </div>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white dark:bg-neutral-950 px-2 text-neutral-500">Or use email</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Log in with email address <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
