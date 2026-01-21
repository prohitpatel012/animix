"use client";

import { BiPlus, BiDownload, BiUserPlus, BiEnvelope, BiFile, BiCog } from "react-icons/bi";

export default function DashboardQuickActions() {
    const actions = [
        { label: "New Project", icon: BiPlus, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
        { label: "Add Member", icon: BiUserPlus, color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20" },
        { label: "Send Email", icon: BiEnvelope, color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
        { label: "Export Data", icon: BiDownload, color: "text-green-500 bg-green-50 dark:bg-green-900/20" },
        { label: "Reports", icon: BiFile, color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20" },
        { label: "Settings", icon: BiCog, color: "text-neutral-500 bg-neutral-100 dark:bg-neutral-800" },
    ];

    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all group"
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform ${action.color}`}>
                            <action.icon />
                        </div>
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
