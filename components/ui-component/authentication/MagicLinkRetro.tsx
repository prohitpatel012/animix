"use client";

export default function MagicLinkRetro() {
    return (
        <div className="min-h-screen bg-[#008080] flex items-center justify-center p-4 font-mono">
            <div className="w-full max-w-md bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 shadow-xl">
                <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-0.5 mb-1">
                    <span className="text-white font-bold text-sm">Login.exe</span>
                    <div className="flex gap-1">
                        <button className="bg-[#c0c0c0] w-4 h-4 text-[10px] flex items-center justify-center border-t border-l border-white border-b border-r border-black font-bold">_</button>
                        <button className="bg-[#c0c0c0] w-4 h-4 text-[10px] flex items-center justify-center border-t border-l border-white border-b border-r border-black font-bold">X</button>
                    </div>
                </div>

                <div className="p-6 border border-white border-br-black flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-600 text-3xl">
                            ✉️
                        </div>
                        <div className="text-sm">
                            <p className="mb-1">Welcome to the Intranet.</p>
                            <p>Please enter your email to proceed.</p>
                        </div>
                    </div>

                    <fieldset className="border border-white border-br-gray-600 p-2">
                        <legend className="text-xs px-1">Credentials</legend>
                        <div className="flex items-center gap-2 mb-2">
                            <label className="text-sm w-16">Email:</label>
                            <input className="flex-1 bg-white border inset focus:bg-yellow-100 outline-none px-1" />
                        </div>
                    </fieldset>

                    <div className="flex justify-end gap-2">
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-sm focus:outline-dotted">Cancel</button>
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm focus:outline-dotted">Next &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
