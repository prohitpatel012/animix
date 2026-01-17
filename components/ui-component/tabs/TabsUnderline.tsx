"use client";

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
                                className={`
                                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors
                                ${current === i
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                        : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-300'
                                    }
                            `}
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
