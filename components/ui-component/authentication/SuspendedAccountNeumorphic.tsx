"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountNeumorphic() {
    return (
        <div className="min-h-screen bg-[#efefef] flex items-center justify-center p-4 text-neutral-600">
            <div className="max-w-md w-full bg-[#efefef] rounded-[50px] p-10 shadow-[20px_20px_60px_#cbcbcb,-20px_-20px_60px_#ffffff] text-center">
                <div className="w-24 h-24 mx-auto bg-[#efefef] rounded-full shadow-[inset_10px_10px_20px_#cbcbcb,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-8 text-red-500">
                    <BiBlock className="w-10 h-10" />
                </div>

                <h2 className="text-2xl font-bold mb-3 text-neutral-700">Account Halted</h2>
                <p className="mb-8 text-sm">
                    We've detected unusual behavior and have suspended your account privileges temporarily.
                </p>

                <div className="flex flex-col gap-4">
                    <button className="w-full py-4 rounded-2xl bg-[#efefef] shadow-[8px_8px_16px_#cbcbcb,-8px_-8px_16px_#ffffff] font-bold text-neutral-600 active:shadow-[inset_6px_6px_10px_#cbcbcb,inset_-6px_-6px_10px_#ffffff] hover:text-red-500 transition-all">
                        Contact Support
                    </button>
                    <button className="w-full py-4 rounded-2xl bg-[#efefef] shadow-[8px_8px_16px_#cbcbcb,-8px_-8px_16px_#ffffff] font-bold text-neutral-600 active:shadow-[inset_6px_6px_10px_#cbcbcb,inset_-6px_-6px_10px_#ffffff] transition-all">
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}
