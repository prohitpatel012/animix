"use client";

import { BiLockAlt } from "react-icons/bi";

export default function AccountLockedNeumorphic() {
    return (
        <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-4">
            <div className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-md w-full text-center">
                <div className="w-24 h-24 bg-[#e0e5ec] rounded-full shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center mx-auto mb-8 text-red-500">
                    <BiLockAlt className="w-10 h-10" />
                </div>

                <h2 className="text-2xl font-bold text-neutral-700 mb-2">Account Locked</h2>
                <p className="text-neutral-500 mb-10">
                    For your security, we've temporarily locked your account.
                </p>

                <div className="space-y-6">
                    <button className="w-full py-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] font-bold text-neutral-600 hover:text-red-500 active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
                        Unlock Options
                    </button>

                    <div className="text-xs text-neutral-400 font-medium">
                        Automatic unlock in 29:59
                    </div>
                </div>
            </div>
        </div>
    )
}
