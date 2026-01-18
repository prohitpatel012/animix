"use client";

export default function SuspendedAccountRetro() {
    return (
        <div className="min-h-screen bg-[#000080] flex items-center justify-center font-mono p-4">
            <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 shadow-2xl max-w-sm w-full">
                <div className="bg-[#000080] px-2 py-1 flex justify-between items-center mb-1">
                    <span className="text-white font-bold text-sm tracking-wide">System Error</span>
                    <button className="bg-[#c0c0c0] w-4 h-4 text-[10px] flex items-center justify-center border border-white border-b-black border-r-black font-bold focus:outline-none active:border-t-black active:border-l-black active:border-b-white active:border-r-white">x</button>
                </div>

                <div className="p-6 flex flex-col items-center text-center gap-6">
                    <div className="flex flex-row items-center gap-4 w-full justify-start">
                        <div className="w-12 h-12 flex-shrink-0 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                            X
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm">Account_Suspended.exe</p>
                            <p className="text-xs text-gray-600">Fatal Exception 0E at 0028:C00068F8</p>
                        </div>
                    </div>

                    <p className="text-sm w-full text-left font-sans">
                        An illegal operation has occurred. Your user profile has been terminated immediately to prevent system damage.
                    </p>

                    <div className="w-full flex justify-center gap-4 mt-2">
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black focus:outline-none focus:border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm text-black min-w-[100px]">
                            Details &gt;&gt;
                        </button>
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black focus:outline-none focus:border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm text-black min-w-[100px]">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
