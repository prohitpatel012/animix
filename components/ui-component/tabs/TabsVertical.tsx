"use client";

import { useState } from "react";

const tabs = [
    { title: "General", desc: "Basic settings" },
    { title: "Privacy", desc: "Data controls" },
    { title: "Notifications", desc: "Email preferences" },
    { title: "Advanced", desc: "Developer tools" },
]

export default function TabsVertical() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <nav className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 w-full md:w-64 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 pb-4 md:pb-0 md:pr-4 overflow-x-auto">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.title}
                                onClick={() => setCurrent(i)}
                                className={`
                                 text-left px-4 py-3 rounded-lg transition-colors min-w-[140px] md:min-w-0
                                 ${current === i
                                        ? 'bg-indigo-50 dark:bg-neutral-900 text-indigo-700 dark:text-indigo-400'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                                    }
                             `}
                            >
                                <div className="font-semibold text-sm">{tab.title}</div>
                                <div className="text-xs opacity-70 mt-0.5">{tab.desc}</div>
                            </button>
                        ))}
                    </nav>
                    <div className="flex-1 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 min-h-[300px]">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{tabs[current].title} Settings</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">Content for {tabs[current].title.toLowerCase()} goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
