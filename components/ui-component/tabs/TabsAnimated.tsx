"use client";

import { useState, useRef, useEffect } from "react";

const tabs = ["Overview", "Integrations", "Activity", "Domains", "Usage"];

export default function TabsAnimated() {
    const [current, setCurrent] = useState(0);
    const [coords, setCoords] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentTab = tabsRef.current[current];
        if (currentTab) {
            setCoords({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth
            });
        }
    }, [current]);

    return (
        <div className="bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="relative border-b border-neutral-800">
                    <div className="flex space-x-6 relative z-10">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                ref={el => { tabsRef.current[i] = el; }}
                                onClick={() => setCurrent(i)}
                                className={`py-4 text-sm font-medium transition-colors duration-300 ${current === i ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div
                        className="absolute bottom-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out"
                        style={{ left: coords.left, width: coords.width }}
                    />
                </div>
            </div>
        </div>
    )
}
