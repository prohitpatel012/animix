"use client";

import { BiLock } from "react-icons/bi";

export default function AccountLockedRetro() {
    return (
        <div className="min-h-screen bg-[#008080] flex items-center justify-center font-mono p-4">
            <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 shadow-xl max-w-sm w-full">
                <div className="bg-red-700 px-2 py-1 flex justify-between items-center mb-1">
                    <span className="text-white font-bold text-sm">Security Alert</span>
                    <button className="bg-[#c0c0c0] w-4 h-4 text-[10px] flex items-center justify-center border border-white border-b-black border-r-black font-bold">x</button>
                </div>

                <div className="p-6 flex flex-col items-center text-center gap-6">
                    <div className="flex items-center gap-4">
                        <BiLock className="w-12 h-12 text-yellow-600" />
                        <div className="text-left">
                            <p className="font-bold mb-1">Access Denied</p>
                            <p className="text-xs">Error Code: 0x80004005</p>
                        </div>
                    </div>

                    <p className="text-sm bg-white border border-gray-500 p-2 w-full text-left font-serif leading-none">
                        This system has been locked due to multiple failed authentication attempts. Please contact your system administrator.
                    </p>

                    <div className="w-full flex justify-end gap-2 mt-2">
                        <button className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold text-sm min-w-[80px]">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
