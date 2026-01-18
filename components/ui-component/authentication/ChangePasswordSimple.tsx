"use client";

import { BiShield } from "react-icons/bi";

export default function ChangePasswordSimple() {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <BiShield className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Update Password</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-neutral-200 dark:border-neutral-800">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="current" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Current Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="current"
                                    name="current"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="new" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="new"
                                    name="new"
                                    type="password"
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
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
