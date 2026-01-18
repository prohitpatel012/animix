"use client";

export default function MagicLinkCorporate() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-neutral-800 max-w-2xl w-full flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Employee Login</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                        Use your corporate email to sign in via magic link.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Work Email</label>
                            <input
                                className="w-full border border-neutral-300 dark:border-neutral-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-600 dark:bg-neutral-900 dark:text-white"
                                type="email"
                            />
                        </div>
                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded text-sm transition-colors">
                            Send Login Link
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-1/2 bg-neutral-100 dark:bg-neutral-900 p-10 flex flex-col justify-center border-l border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-sm font-bold text-neutral-800 dark:text-white mb-4">Why use Magic Link?</h3>
                    <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-center gap-2">✓ No passwords to forget</li>
                        <li className="flex items-center gap-2">✓ More secure than basic auth</li>
                        <li className="flex items-center gap-2">✓ One-click access</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
