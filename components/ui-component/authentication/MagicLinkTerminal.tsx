"use client";

export default function MagicLinkTerminal() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-4 font-mono text-green-500">
            <div className="w-full max-w-lg">
                <div className="mb-4 text-xs opacity-50">
                    user@system:~/auth$ ./login --magic-link
                </div>

                <div className="border border-green-500/50 bg-[#0c0c0c] p-6 shadow-[0_0_20px_rgba(34,197,94,0.1)] rounded-sm">
                    <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50" />
                        <div className="w-3 h-3 rounded-full bg-green-500 opacity-50" />
                    </div>

                    <h2 className="text-xl font-bold mb-6 text-green-400">
                        {'>'} INITIATE MAGIC LINK SEQUENCE
                    </h2>

                    <form className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-green-500/30 pb-2">
                            <span className="text-green-700">{'>'}</span>
                            <input
                                type="email"
                                className="w-full bg-transparent border-none outline-none text-green-500 placeholder-green-900 font-bold"
                                placeholder="ENTER_EMAIL_ADDRESS"
                            />
                            <span className="animate-pulse block w-2 h-4 bg-green-500"></span>
                        </div>

                        <div className="flex justify-end">
                            <button className="px-6 py-2 border border-green-500 hover:bg-green-500 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">
                                [ Execute ]
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-xs text-green-800">
                        STATUS: WAITING_FOR_INPUT...
                    </div>
                </div>
            </div>
        </div>
    )
}
