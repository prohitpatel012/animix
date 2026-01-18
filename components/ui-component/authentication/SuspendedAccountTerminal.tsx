"use client";

export default function SuspendedAccountTerminal() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
            <div className="w-full max-w-lg bg-[#101010] p-6 border-l-4 border-red-600 shadow-2xl">
                <div className="text-neutral-500 text-xs mb-4">root@admin-console:~$ status_check --uid=88291</div>

                <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                        <span className="text-neutral-600">STATUS:</span>
                        <span className="text-red-600 font-bold bg-red-900/10 px-2">SUSPENDED</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-neutral-600">REASON:</span>
                        <span className="text-neutral-300">Policy Violation (spam_bot_detected)</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-neutral-600">DATE:</span>
                        <span className="text-neutral-300">2024-10-14 14:30:00 UTC</span>
                    </div>
                </div>

                <div className="border-t border-dashed border-neutral-800 pt-4 text-sm text-neutral-400 leading-relaxed mb-6">
                    &gt; Access to this account is restricted. <br />
                    &gt; Please contact your administrator for manual override.
                </div>

                <button className="text-red-500 hover:text-red-400 text-xs uppercase tracking-widest border border-red-900/30 px-4 py-2 hover:bg-red-900/10 transition-colors">
                    [ Submit_Ticket ]
                </button>
            </div>
        </div>
    )
}
