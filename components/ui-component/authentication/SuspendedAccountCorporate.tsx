"use client";

import { BiError, BiFile } from "react-icons/bi";

export default function SuspendedAccountCorporate() {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg max-w-2xl w-full overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="bg-slate-800 px-8 py-6 flex justify-between items-center">
                    <h2 className="text-white font-semibold text-lg flex items-center gap-2">
                        <BiError className="text-red-400" /> Administrative Action
                    </h2>
                    <span className="text-slate-400 text-xs font-mono">TICKET #992812</span>
                </div>

                <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Account Suspension Notice</h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        This notice is to inform you that your account privileges have been suspended effective immediately.
                        This action was taken in accordance with our corporate compliance policies regarding data usage.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-md p-6 mb-8">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Next Steps:</h4>
                        <ul className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Review the attached compliance report.</li>
                            <li>Contact your department head immediately.</li>
                            <li>Do not attempt to create a new account.</li>
                        </ul>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded font-medium text-sm transition-colors">
                            <BiFile /> Download Report
                        </button>
                        <button className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded font-medium text-sm transition-colors shadow-sm">
                            Acknowledge Receipt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
