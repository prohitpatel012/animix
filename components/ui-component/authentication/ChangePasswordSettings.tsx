"use client";

export default function ChangePasswordSettings() {
    return (
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950 shadow-sm">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-neutral-900 dark:text-white">Change Password</h3>
                <div className="mt-2 max-w-xl text-sm text-neutral-500 dark:text-neutral-400">
                    <p>Update your password associated with your account.</p>
                </div>

                <form className="mt-5 space-y-4">
                    <div>
                        <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-white">
                            Current password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="current-password"
                                id="current-password"
                                className="block w-full max-w-sm rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:text-white dark:ring-neutral-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-white">
                            New password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="block w-full max-w-sm rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:text-white dark:ring-neutral-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-white">
                            Confirm password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                className="block w-full max-w-sm rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:text-white dark:ring-neutral-700"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-right sm:px-6 rounded-b-lg">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                >
                    Save
                </button>
            </div>
        </div>
    )
}
