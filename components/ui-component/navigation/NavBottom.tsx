"use client";

import { BiHome, BiSearch, BiHeart, BiUser } from "react-icons/bi";

export default function NavBottom() {
    return (
        <div className="bg-neutral-100 flex items-center justify-center p-12">
            <div className="relative w-[375px] h-[600px] bg-white border border-neutral-300 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="flex-1 p-6 bg-neutral-50 overflow-y-auto">
                    <div className="h-32 bg-indigo-100 rounded-xl mb-4"></div>
                    <div className="h-32 bg-indigo-100 rounded-xl mb-4"></div>
                    <div className="h-32 bg-indigo-100 rounded-xl mb-4"></div>
                    <div className="h-32 bg-indigo-100 rounded-xl mb-4"></div>
                </div>

                {/* Bottom Nav Bar */}
                <div className="h-16 bg-white border-t border-neutral-100 flex items-center justify-around px-2">
                    <button className="flex flex-col items-center gap-1 text-indigo-600 p-2">
                        <BiHome size={24} />
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600 p-2">
                        <BiSearch size={24} />
                        <span className="text-[10px] font-medium">Explore</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600 p-2">
                        <BiHeart size={24} />
                        <span className="text-[10px] font-medium">Saved</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600 p-2">
                        <BiUser size={24} />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
