"use client";

import { useState } from "react";

const tabs = [
    { name: "Write", content: "Write content..." },
    { name: "Preview", content: "Preview markdown..." },
    { name: "Code", content: "View source..." },
]

export default function TabsFolder() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-emerald-50 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="flex items-end space-x-1 pl-4">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.name}
                            onClick={() => setCurrent(i)}
                            className={`
                             px-6 py-2 rounded-t-lg text-sm font-semibold transition-transform
                             ${current === i
                                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-t border-l border-r border-neutral-200 dark:border-neutral-700 translate-y-[1px] z-10'
                                    : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                                }
                         `}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-b-lg rounded-tr-lg p-8 min-h-[200px] shadow-sm relative z-0">
                    <h4 className="text-lg font-bold mb-2">Editor Mode: {tabs[current].name}</h4>
                    <div className="w-full h-2 rounded bg-neutral-100 dark:bg-neutral-700 mb-2"></div>
                    <div className="w-2/3 h-2 rounded bg-neutral-100 dark:bg-neutral-700"></div>
                </div>
            </div>
        </div>
    )
}
