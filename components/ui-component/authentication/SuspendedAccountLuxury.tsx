"use client";

import { BiBlock } from "react-icons/bi";

export default function SuspendedAccountLuxury() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-8">
            <div className="max-w-xl w-full text-center border-y border-[#c5a059] py-16 px-8 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0f0f] px-6 text-[#c5a059]">
                    <span className="text-xs uppercase tracking-[0.3em]">Status Notification</span>
                </div>

                <BiBlock className="w-12 h-12 text-[#c5a059] mx-auto mb-8 opacity-80" />

                <h2 className="text-4xl text-white font-serif mb-6 tracking-wide">Membership Suspended</h2>

                <p className="text-neutral-400 font-serif italic mb-12 max-w-sm mx-auto leading-loose text-lg">
                    "We regret to inform you that your membership privileges have been revoked due to inactivity."
                </p>

                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                    <button className="py-4 bg-[#c5a059] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#d6b066] transition-colors">
                        Contact Concierge
                    </button>

                    <button className="py-4 border border-[#333] text-[#666] uppercase tracking-widest text-xs hover:border-[#c5a059] hover:text-[#c5a059] transition-all duration-500">
                        View Terms
                    </button>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0f0f0f] px-6 text-[#333]">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-serif">Est. 2024</span>
                </div>
            </div>
        </div>
    )
}
