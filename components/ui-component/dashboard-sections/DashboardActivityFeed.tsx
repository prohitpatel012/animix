"use client";

import { BiCheckCircle, BiMessageSquareDetail, BiCreditCard, BiUserPlus } from "react-icons/bi";

export default function DashboardActivityFeed() {
    const activities = [
        { id: 1, user: "Alice Smith", action: "completed task", target: "Website Redesign", time: "2 min ago", icon: BiCheckCircle, color: "text-green-500" },
        { id: 2, user: "Bob Jones", action: "commented on", target: "Marketing Campaign", time: "1 hour ago", icon: BiMessageSquareDetail, color: "text-blue-500" },
        { id: 3, user: "System", action: "processed payment for", target: "Invoice #1023", time: "3 hours ago", icon: BiCreditCard, color: "text-purple-500" },
        { id: 4, user: "New User", action: "signed up", target: "", time: "5 hours ago", icon: BiUserPlus, color: "text-orange-500" },
    ];

    return (
        <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-6">
                {activities.map((activity, index) => (
                    <div key={activity.id} className="relative pl-6 sm:pl-8 group">
                        {/* Timeline Line */}
                        {index !== activities.length - 1 && (
                            <div className="absolute left-2.5 top-6 bottom-[-24px] w-0.5 bg-neutral-200 dark:bg-neutral-800 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-colors"></div>
                        )}
                        <div className={`absolute left-0 top-1 p-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ${activity.color}`}>
                            <activity.icon className="text-md" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                <span className="font-semibold text-neutral-900 dark:text-white">{activity.user}</span> {activity.action} <span className="font-medium">{activity.target}</span>
                            </p>
                            <span className="text-xs text-neutral-400 whitespace-nowrap mt-1 sm:mt-0">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white border-t border-neutral-100 dark:border-neutral-800 transition-colors">
                View All Activity
            </button>
        </div>
    );
}
