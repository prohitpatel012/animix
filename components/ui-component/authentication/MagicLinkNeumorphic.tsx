"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkNeumorphic() {
    return (
        <div className="min-h-screen bg-[#efeeee] flex items-center justify-center p-4 text-neutral-600">
            <div className="bg-[#efeeee] p-12 rounded-[50px] shadow-[20px_20px_60px_#cbced1,-20px_-20px_60px_#ffffff] max-w-md w-full">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-24 h-24 rounded-full bg-[#efeeee] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center mb-6">
                        <BiEnvelope className="w-10 h-10 text-neutral-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-700">Magic Sign In</h2>
                </div>

                <form className="space-y-8">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-[#efeeee] p-4 rounded-xl shadow-[inset_4px_4px_8px_#cbced1,inset_-4px_-4px_8px_#ffffff] outline-none text-neutral-600 placeholder-neutral-400 focus:shadow-[inset_2px_2px_4px_#cbced1,inset_-2px_-2px_4px_#ffffff] transition-shadow"
                        />
                    </div>

                    <button className="w-full py-4 rounded-xl bg-[#efeeee] shadow-[6px_6px_12px_#cbced1,-6px_-6px_12px_#ffffff] font-bold text-neutral-600 hover:text-blue-500 active:shadow-[inset_4px_4px_8px_#cbced1,inset_-4px_-4px_8px_#ffffff] transition-all transform active:scale-[0.98]">
                        Send Verification
                    </button>
                </form>

                <div className="mt-8 text-center text-sm">
                    <span className="text-neutral-500">Already have a code?</span> <a href="#" className="font-bold text-neutral-600 hover:text-blue-500">Enter it here</a>
                </div>
            </div>
        </div>
    )
}
