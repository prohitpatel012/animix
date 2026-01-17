"use client";

import { useState } from "react";

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

export default function TabsPills() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="flex justify-center">
                    <nav className="flex space-x-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-full">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setCurrent(i)}
                                className={`
                                 px-4 py-2 text-sm font-medium rounded-full transition-all
                                 ${current === i
                                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                    }
                             `}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="mt-12 text-center text-neutral-500">
                    Showing data for: <strong className="text-neutral-900 dark:text-white">{tabs[current]}</strong>
                </div>
            </div>
        </div>
    )
}
