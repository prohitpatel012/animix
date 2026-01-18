"use client";

export default function LogoutTerminal() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
            <div className="w-full max-w-lg border border-red-900/50 bg-[#0a0505] p-6 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <div className="flex justify-between border-b border-red-900/30 pb-2 mb-6">
                    <span className="text-red-500 text-xs">TERMINAL SESSION [ENDED]</span>
                    <span className="text-red-900 text-xs">UID: 0000</span>
                </div>

                <div className="space-y-2 text-sm mb-8">
                    <div className="text-red-400">{'>'} LOGOUT_SEQUENCE_INITIATED...</div>
                    <div className="text-red-400">{'>'} CLEARING_CACHE... [OK]</div>
                    <div className="text-red-400">{'>'} TERMINATING_CONNECTION... [OK]</div>
                    <div className="text-red-400">{'>'} SESSION_CLOSED_SUCCESSFULLY.</div>
                    <div className="text-red-500 font-bold animate-pulse mt-4">{'>'} SYSTEM_HALTED_</div>
                </div>

                <button className="w-full border border-red-800 text-red-600 py-3 text-xs uppercase hover:bg-red-900/20 transition-colors">
                    [ REBOOT_SYSTEM ]
                </button>
            </div>
        </div>
    )
}
