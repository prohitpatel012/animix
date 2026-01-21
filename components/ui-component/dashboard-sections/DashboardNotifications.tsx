"use client";

import { BiInfoCircle, BiCheck, BiError, BiX } from "react-icons/bi";

export default function DashboardNotifications() {
    const notifications = [
        { title: "System maintenance scheduled", desc: "Dec 18, 2023 at 02:00 AM", type: "info", icon: BiInfoCircle, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
        { title: "Payment successful", desc: "Invoice #2390 paid", type: "success", icon: BiCheck, color: "text-green-500 bg-green-50 dark:bg-green-900/20" },
        { title: "Storage limit reached", desc: "Please upgrade your plan", type: "warning", icon: BiError, color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
    ];

    return (
        <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Notifications</h3>
                <button className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm">Mark all read</button>
            </div>

            <div className="space-y-4">
                {notifications.map((note, idx) => (
                    <div key={idx} className="flex gap-4 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors relative group">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${note.color}`}>
                            <note.icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{note.title}</h4>
                            <p className="text-xs text-neutral-500 mt-0.5">{note.desc}</p>
                        </div>
                        <button className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-900 transition-all">
                            <BiX className="text-lg" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
