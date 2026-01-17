"use client";

import { useState } from "react";

export default function TabsSegmented() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-md px-6 lg:px-8">
                <div className="bg-neutral-200 dark:bg-neutral-800 p-1 rounded-lg flex relative">
                    {/* Animated Background could be added here similar to TabsAnimated but with width/transform */}
                    {['Login', 'Register'].map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setCurrent(i)}
                            className={`
                             flex-1 py-1.5 text-sm font-medium rounded-md transition-all shadow-sm
                             ${current === i
                                    ? 'bg-white dark:bg-neutral-600 text-neutral-900 dark:text-white shadow'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                                }
                         `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
