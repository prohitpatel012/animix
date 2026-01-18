"use client";

export default function TwoFactorTerminal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4 font-mono">
            <div className="w-full max-w-lg">
                <div className="text-green-500 mb-6">
                    <p>{'>'} INITIATING SECURITY PROTOCOL...</p>
                    <p>{'>'} VERIFYING ENCRYPTION KEYS...</p>
                    <p>{'>'} AWAITING USER INPUT_</p>
                </div>

                <div className="border border-green-500/30 p-8 bg-green-900/5 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/20 animate-scan" />

                    <h2 className="text-green-400 text-xl font-bold mb-8 flex items-center gap-2">
                        <span className="animate-pulse">●</span> AUTHENTICATION REQUIRED
                    </h2>

                    <form className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-green-600 text-xs uppercase tracking-widest">[INPUT_SECURITY_CODE]</label>
                            <input
                                type="text"
                                className="bg-black border border-green-800 text-green-400 p-3 outline-none focus:border-green-500 focus:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all font-bold tracking-widest"
                                placeholder="******"
                            />
                        </div>

                        <button className="w-full border border-green-600 text-green-500 py-3 hover:bg-green-600 hover:text-black transition-colors uppercase text-sm font-bold tracking-widest">
                            Execute
                        </button>
                    </form>
                </div>

                <p className="text-green-800 text-xs mt-4 text-center">SYSTEM ID: 492-XKA | ENCRYPTION: AES-256</p>
            </div>
        </div>
    )
}
