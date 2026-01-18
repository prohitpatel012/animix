"use client";

export default function LogoutRetro() {
    return (
        <div className="min-h-screen bg-[#000080] flex items-center justify-center font-mono p-4">
            <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 shadow-xl max-w-sm w-full">
                <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex justify-between items-center">
                    <span className="text-white font-bold text-sm">System_Shutdown.exe</span>
                    <button className="bg-[#c0c0c0] w-4 h-4 text-[10px] flex items-center justify-center border border-white border-b-black border-r-black font-bold">x</button>
                </div>

                <div className="p-6 flex flex-col items-center text-center gap-6">
                    <div className="text-4xl">💾</div>

                    <p className="text-sm">
                        It is now safe to turn off your computer.
                    </p>

                    <div className="w-full flex justify-center gap-4 mt-2">
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm">
                            Restart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
