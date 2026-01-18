"use client";

export default function AccountLockedTerminal() {
    return (
        <div className="min-h-screen bg-[#050510] flex items-center justify-center p-4 font-mono text-cyan-500">
            <div className="w-full max-w-lg border-2 border-cyan-800 bg-[#050510] p-8 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative">
                <div className="absolute top-0 left-0 bg-cyan-800 text-[#050510] px-2 py-0.5 text-xs font-bold">
                    SECURE_SHELL_V4
                </div>

                <div className="space-y-4 mb-8 mt-4">
                    <div className="flex gap-2">
                        <span className="text-cyan-700">{'>'}</span> check_access --user="current"
                    </div>
                    <div className="text-yellow-500">
                        [WARN] Suspicious activity detected from 192.168.x.x
                    </div>
                    <div className="text-red-500 font-bold">
                        [CRITICAL] AUTHENTICATION_FAILED (5/5)
                    </div>
                    <div>
                        <span className="text-cyan-700">{'>'}</span> lockdown_protocol --init
                    </div>
                    <div className="text-cyan-300">
                        System is now in LOCKDOWN mode. All ports closed.
                    </div>
                    <div className="typing-cursor inline-block w-2 h-4 bg-cyan-500 animate-pulse ml-1"></div>
                </div>

                <div className="border border-cyan-900 p-4 text-xs text-cyan-400/80">
                    To restore access, please contact your system administrator or wait for the cooldown timer (1800s) to expire.
                </div>
            </div>
        </div>
    )
}
