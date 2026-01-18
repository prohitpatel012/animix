"use client";

import { useState } from "react";

export default function OTPInput() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Enter Verification Code
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    We sent a 6-digit code to your mobile number ending in **89
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white dark:bg-neutral-950 px-6 py-12 shadow sm:rounded-lg sm:px-12 border border-neutral-200 dark:border-neutral-800">
                    <form className="space-y-6" action="#" method="POST">
                        <div className="flex justify-center gap-2 sm:gap-4">
                            {otp.map((data, index) => (
                                <input
                                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-semibold border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                                    type="text"
                                    name="otp"
                                    maxLength={1}
                                    key={index}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                            >
                                Verify
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                        Didn't receive the code?{' '}
                        <button type="button" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Resend
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
