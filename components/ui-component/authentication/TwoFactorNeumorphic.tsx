"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorNeumorphic() {
    return (
        <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-4">
            <div className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-md w-full text-neutral-600">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mx-auto flex items-center justify-center mb-6">
                        <BiShield className="w-10 h-10 text-neutral-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Security Check</h2>
                    <p className="text-sm">Verify your identify to continue.</p>
                </div>

                <form className="space-y-8">
                    <div className="flex justify-between gap-2 px-2">
                        {[1, 2, 3, 4].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-14 h-14 bg-[#e0e5ec] rounded-xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-center text-xl font-bold outline-none focus:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] transition-shadow text-neutral-600"
                            />
                        ))}
                    </div>

                    <button className="w-full py-4 rounded-xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] font-bold text-neutral-600 hover:text-indigo-500 active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
                        Validate
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-sm font-semibold hover:text-indigo-500 transition-colors">Resend Code</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
