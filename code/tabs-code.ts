export const tabsUnderlineCode = `"use client";

import { useState } from "react";

const tabs = [
    { name: "My Account", content: "Manage your account details and preferences." },
    { name: "Company", content: "Update your organization and billing information." },
    { name: "Team Members", content: "Invite and manage team access." },
    { name: "Billing", content: "View invoice history and download receipts." },
]

export default function TabsUnderline() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="border-b border-neutral-200 dark:border-neutral-800">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.name}
                                onClick={() => setCurrent(i)}
                                className={\`
                                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors
                                \${current === i
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                        : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-300'
                                    }
                            \`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="mt-8">
                    <p className="text-neutral-600 dark:text-neutral-400">{tabs[current].content}</p>
                </div>
            </div>
        </div>
    )
}
`;

export const tabsPillsCode = `"use client";

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
                                className={\`
                                 px-4 py-2 text-sm font-medium rounded-full transition-all
                                 \${current === i
                                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                    }
                             \`}
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
`;

export const tabsVerticalCode = `"use client";

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
                                className={\`
                                 text-left px-4 py-3 rounded-lg transition-colors min-w-[140px] md:min-w-0
                                 \${current === i
                                        ? 'bg-indigo-50 dark:bg-neutral-900 text-indigo-700 dark:text-indigo-400'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                                    }
                             \`}
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
`;

export const tabsGlassCode = `"use client";

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
                            className={\`
                             flex flex-col items-center gap-1 w-20 py-3 rounded-xl transition-all duration-300
                             \${current === i
                                    ? 'bg-white text-indigo-600 shadow-lg translate-y-[-4px]'
                                    : 'text-white hover:bg-white/10'
                                }
                         \`}
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
`;

export const tabsAnimatedCode = `"use client";

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
                                className={\`py-4 text-sm font-medium transition-colors duration-300 \${current === i ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}\`}
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
`;

export const tabsFolderCode = `"use client";

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
                            className={\`
                             px-6 py-2 rounded-t-lg text-sm font-semibold transition-transform
                             \${current === i
                                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-t border-l border-r border-neutral-200 dark:border-neutral-700 translate-y-px z-10'
                                    : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                                }
                         \`}
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
`;

export const tabsCardsCode = `"use client";

import { useState } from "react";
import { BiBox, BiCloud, BiBarChart } from "react-icons/bi";

const options = [
    { name: "Personal", price: "$10", icon: BiBox },
    { name: "Professional", price: "$40", icon: BiBarChart },
    { name: "Enterprise", price: "$100", icon: BiCloud },
]

export default function TabsCards() {
    const [selected, setSelected] = useState(1);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => setSelected(i)}
                            className={\`
                            p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center text-center
                            \${selected === i
                                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                    : 'border-neutral-100 dark:border-neutral-800 hover:border-neutral-300'
                                }
                         \`}
                        >
                            <opt.icon className={\`w-8 h-8 mb-3 \${selected === i ? 'text-indigo-600' : 'text-neutral-400'}\`} />
                            <div className={\`font-semibold \${selected === i ? 'text-indigo-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}\`}>{opt.name}</div>
                            <div className={\`text-sm mt-1 \${selected === i ? 'text-indigo-700 dark:text-indigo-300' : 'text-neutral-400'}\`}>Starts at {opt.price}</div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
`;

export const tabsMinimalCode = `"use client";

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
                            className={\`
                            pb-4 text-sm font-bold uppercase tracking-widest relative
                            \${current === i ? 'text-black dark:text-white' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}
                        \`}
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
`;

export const tabsSegmentedCode = `"use client";

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
                            className={\`
                             flex-1 py-1.5 text-sm font-medium rounded-md transition-all shadow-sm
                             \${current === i
                                    ? 'bg-white dark:bg-neutral-600 text-neutral-900 dark:text-white shadow'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                                }
                         \`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
`;

export const tabsIconOnlyCode = `"use client";

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
                            className={\`
                             p-3 rounded-md transition-all
                             \${current === i
                                    ? 'bg-white dark:bg-neutral-800 text-indigo-600 shadow-sm'
                                    : 'text-neutral-500 hover:text-neutral-700'
                                }
                         \`}
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
`;
