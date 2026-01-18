"use client";

export default function TwoFactorRetro() {
    return (
        <div className="min-h-screen bg-[#008080] flex items-center justify-center font-mono p-4">
            <div className="bg-[#c0c0c0] p-1 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black shadow-xl max-w-md w-full">
                <div className="bg-[#000080] px-2 py-1 flex justify-between items-center text-white mb-1">
                    <span className="font-bold text-sm tracking-wide">Security.exe</span>
                    <button className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center text-xs border border-white border-b-black border-r-black leading-none font-bold">x</button>
                </div>

                <div className="p-6 border border-white border-br-black">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white border border-gray-500 shadow-inner flex items-center justify-center text-2xl">
                            🔑
                        </div>
                        <div>
                            <p className="text-sm mb-2">Please enter the verification code to continue.</p>
                            <p className="text-xs text-gray-600">Session ID: 8X-99</p>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="bg-white border inset-2 border-gray-600 p-1 flex">
                            <input className="w-full outline-none text-lg font-bold tracking-[0.5em] uppercase px-2" placeholder="______" />
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button className="px-6 py-1.5 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-sm">Cancel</button>
                            <button className="px-6 py-1.5 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm">OK</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
