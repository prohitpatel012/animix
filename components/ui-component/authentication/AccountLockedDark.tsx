"use client";

import { BiLock } from "react-icons/bi";

export default function AccountLockedDark() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="w-full max-w-sm border border-neutral-800 bg-neutral-900 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900" />

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BiLock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">Account Suspended</h2>
                        <p className="text-xs text-neutral-500 font-mono">CODE: ACCESS_VIOLATION_0X1</p>
                    </div>
                </div>

                <div className="bg-neutral-950 rounded-lg p-4 mb-6 border border-neutral-800">
                    <p className="text-neutral-300 text-sm leading-6">
                        Access to this account is restricted due to security protocols.
                    </p>
                </div>

                <button className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors text-sm">
                    Verify Identity
                </button>
            </div>
        </div>
    )
}
