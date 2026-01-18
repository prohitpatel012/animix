"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountDark() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="w-full max-w-lg border border-red-900/30 bg-neutral-900/50 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-red-950 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-900/50">
                        <BiBlock className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Account Banned</h2>
                        <p className="text-sm text-neutral-400">
                            Violation: ToS Section 4.2 (Abusive Behavior)
                        </p>
                        <p className="text-sm text-neutral-500 font-mono mt-1">Ref: #BAN-9921</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <p className="text-neutral-300 leading-7">
                        Due to repeated violations of our community standards, your account has been permanently suspended. You will no longer receive emails or notifications.
                    </p>
                </div>

                <div className="border-t border-neutral-800 pt-6 flex justify-between items-center">
                    <span className="text-neutral-500 text-sm">Suspended on: Oct 24, 2024</span>
                    <button className="text-white hover:text-red-400 text-sm font-semibold transition-colors">
                        Download Data Archive
                    </button>
                </div>
            </div>
        </div>
    )
}
