"use client";

import { useState } from "react";
import { BiMobile, BiLaptop, BiDesktop } from "react-icons/bi";

const tabs = [
    { icon: BiMobile, label: "Mobile" },
    { icon: BiLaptop, label: "Tablet" },
    { icon: BiDesktop, label: "Desktop" },
]

export default function TabsIconOnly() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
                <div className="flex bg-neutral-100 dark:bg-neutral-900 rounded-lg p-1 gap-1">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`
                             p-3 rounded-md transition-all
                             ${current === i
                                    ? 'bg-white dark:bg-neutral-800 text-indigo-600 shadow-sm'
                                    : 'text-neutral-500 hover:text-neutral-700'
                                }
                         `}
                            aria-label={tab.label}
                        >
                            <tab.icon className="w-5 h-5" />
                        </button>
                    ))}
                </div>
                <p className="mt-4 text-xs text-neutral-400 font-mono">View mode: {tabs[current].label}</p>
            </div>
        </div>
    )
}
