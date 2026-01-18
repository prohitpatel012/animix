"use client";

import { BiLockAlt, BiInfoCircle } from "react-icons/bi";

export default function AccountLockedCorporate() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 shadow rounded-lg max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="bg-red-600 px-6 py-4 flex items-center gap-3">
                    <BiLockAlt className="text-white w-6 h-6" />
                    <h2 className="text-white font-semibold text-lg">Account Locked</h2>
                </div>

                <div className="p-8">
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Your account has been locked because the password was entered incorrectly 5 times.
                        Please wait 30 minutes before trying again, or contact your IT administrator.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md p-4 flex gap-3 mb-8">
                        <BiInfoCircle className="text-blue-600 dark:text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Policy Notice:</strong> Corporate security policy #8281 requires mandatory lockouts for repeated failed attempts.
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors">
                            Read Policy
                        </button>
                        <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium text-sm transition-colors shadow-sm">
                            Contact IT Desk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
