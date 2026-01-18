"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorCorporate() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 max-w-md w-full rounded-sm shadow-md border-t-4 border-blue-700">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            <BiShield className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                        </div>
                        <div>
                            <h2 className="font-bold text-slate-800 dark:text-white">SSO Verification</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Security</p>
                        </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
                        For security purposes, please enter the token displayed on your hardware token or authenticator app.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Security Token</label>
                            <input
                                type="text"
                                className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 dark:bg-slate-900 dark:text-white"
                                placeholder="ex. 392817"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="trust" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="trust" className="text-sm text-slate-600 dark:text-slate-400">Trust this device for 30 days</label>
                        </div>

                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded transition-colors">
                            Authenticate
                        </button>
                    </form>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs text-slate-500">
                    <span>Help Desk: 888-555-0123</span>
                    <a href="#" className="hover:underline text-blue-600 dark:text-blue-400">IT Policy</a>
                </div>
            </div>
        </div>
    )
}
