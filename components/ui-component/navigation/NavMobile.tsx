"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function NavMobile() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white relative h-[300px] overflow-hidden border border-neutral-200">
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                Mobile View Simulator
            </div>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full bg-white px-4 py-3 flex justify-between items-center shadow-sm z-20">
                <span className="font-bold text-lg">App</span>
                <button onClick={() => setOpen(true)} className="p-2">
                    <BiMenu size={24} />
                </button>
            </div>

            {/* Drawer Overlay */}
            {open && (
                <div className="absolute inset-0 bg-black/50 z-30 transform transition-opacity" onClick={() => setOpen(false)}></div>
            )}

            {/* Drawer Panel */}
            <div className={`absolute top-0 left-0 h-full w-64 bg-white z-40 shadow-xl transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 border-b">
                    <span className="font-bold text-xl text-indigo-600">Menu</span>
                </div>
                <div className="p-4 space-y-4">
                    {['Dashboard', 'Messages', 'Profile', 'Settings'].map((item) => (
                        <a key={item} href="#" className="block text-neutral-600 hover:text-indigo-600 font-medium">{item}</a>
                    ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">Upgrade to Pro</button>
                </div>
            </div>
        </div>
    )
}
