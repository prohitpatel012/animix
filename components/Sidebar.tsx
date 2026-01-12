"use client";

import { motion } from "motion/react";

type Props = {
    active: string;
    setActive: (v: string) => void;
};

export default function Sidebar({ active, setActive }: Props) {
    const items = ["Buttons", "Cards", "Modal", "Sidebar"];

    return (
        <div className="w-full lg:w-64 h-full  lg:border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="p-4 lg:p-6">
                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 px-3">
                    Components
                </h2>
                <nav className="space-y-1">
                    {items.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`
                                group relative w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                ${active === item
                                    ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                }
                            `}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}