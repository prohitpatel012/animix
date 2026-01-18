"use client";

import { BiShield, BiMobile } from "react-icons/bi";

export default function TwoFactorDark() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 text-white">
            <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner border border-neutral-800">
                        <BiMobile className="w-10 h-10 text-neutral-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-200">Device Verification</h2>
                    <p className="text-neutral-500 mt-2 text-sm">
                        Please check your phone for the security code.
                    </p>
                </div>

                <form className="space-y-8">
                    <div className="flex justify-between px-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative">
                                <input
                                    type="text"
                                    maxLength={1}
                                    className="w-14 h-16 bg-neutral-950 border border-neutral-800 rounded-xl text-center text-2xl font-bold focus:border-neutral-600 focus:ring-0 outline-none transition-all shadow-inner"
                                />
                                <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" />
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <button type="submit" className="w-full bg-white text-neutral-950 font-bold py-3.5 rounded-xl hover:bg-neutral-200 transition-colors">
                            Verify Device
                        </button>
                        <button type="button" className="w-full bg-neutral-800 text-neutral-400 font-medium py-3.5 rounded-xl hover:bg-neutral-700 transition-colors">
                            Resend Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
