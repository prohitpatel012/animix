"use client";

import { useState } from "react";
import { BiHome, BiBriefcase, BiUser, BiCog } from "react-icons/bi";

const tabs = [
    { icon: BiHome, label: "Home" },
    { icon: BiBriefcase, label: "Work" },
    { icon: BiUser, label: "Profile" },
    { icon: BiCog, label: "Config" },
]

export default function TabsGlass() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-linear-to-br from-indigo-500 to-purple-600 py-24">
            <div className="mx-auto max-w-2xl px-6 flex justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex gap-2 shadow-2xl">
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`
                             flex flex-col items-center gap-1 w-20 py-3 rounded-xl transition-all duration-300
                             ${current === i
                                    ? 'bg-white text-indigo-600 shadow-lg translate-y-[-4px]'
                                    : 'text-white hover:bg-white/10'
                                }
                         `}
                        >
                            <t.icon className="text-2xl" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">{t.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="text-center mt-12 text-white/80 font-medium">Glassmorphism Tab Bar</div>
        </div>
    )
}
