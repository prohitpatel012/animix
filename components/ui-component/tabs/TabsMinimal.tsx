"use client";

import { useState } from "react";

const tabs = ["Details", "Reviews", "Q&A"];

export default function TabsMinimal() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="flex space-x-10 border-b border-neutral-100 dark:border-neutral-800">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setCurrent(i)}
                            className={`
                            pb-4 text-sm font-bold uppercase tracking-widest relative
                            ${current === i ? 'text-black dark:text-white' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}
                        `}
                        >
                            {tab}
                            {current === i && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white" />}
                        </button>
                    ))}
                </div>
                <div className="py-8">
                    <span className="text-neutral-500 italic">Content for {tabs[current]} tab.</span>
                </div>
            </div>
        </div>
    )
}
