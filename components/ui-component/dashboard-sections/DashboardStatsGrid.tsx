"use client";

import { BiTrendingUp, BiUser, BiDollar, BiShoppingBag } from "react-icons/bi";

export default function DashboardStatsGrid() {
    const stats = [
        { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: BiDollar, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { title: "Subscriptions", value: "+2350", change: "+180.1%", icon: BiUser, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { title: "Sales", value: "+12,234", change: "+19%", icon: BiShoppingBag, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { title: "Active Now", value: "+573", change: "+201", icon: BiTrendingUp, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">{stat.value}</h3>
                        </div>
                        <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon className="text-xl" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 font-medium">{stat.change}</span>
                        <span className="text-neutral-400 ml-2">from last month</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
