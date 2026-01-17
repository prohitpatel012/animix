"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Icons ---
const HomeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
);
const ChartBarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);
const SettingsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.212 1.28a1.125 1.125 0 0 1-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);
const BellIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
);
const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);
const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);
const ArrowUpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
);
const ArrowDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

// --- Modular Components ---

export const DashboardSidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen?: (v: boolean) => void }) => {
    const links = [
        { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, href: '#', active: true },
        { name: 'Users', icon: <UsersIcon className="w-5 h-5" />, href: '#' },
        { name: 'Analytics', icon: <ChartBarIcon className="w-5 h-5" />, href: '#' },
        { name: 'Settings', icon: <SettingsIcon className="w-5 h-5" />, href: '#' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen && setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
            fixed top-0 left-0 bottom-0 z-50 w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 transform transition-transform duration-200 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static
        `}>
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">A</div>
                    <span className="font-bold text-xl text-neutral-900 dark:text-white">Animix</span>
                </div>

                {/* Nav */}
                <nav className="p-4 space-y-1">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`
                            flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors
                            ${link.active
                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                    : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
                                }
                        `}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* User Profile Snippet */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">Jane Doe</p>
                            <p className="text-xs text-neutral-500 truncate">jane@example.com</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export const DashboardHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
    return (
        <header className="h-16 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 rounded-lg lg:hidden"
                >
                    <MenuIcon className="w-6 h-6" />
                </button>
                {/* Breadcrumb or Title */}
                <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">Overview</h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden md:flex relative">
                    <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-4 py-2 w-64 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-neutral-900 dark:text-white"
                    />
                </div>

                {/* Notifications */}
                <button className="p-2 relative text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                    <BellIcon className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                </button>
            </div>
        </header>
    );
};

export const DashboardStats = () => {
    const stats = [
        { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
        { name: 'Subscriptions', value: '+2350', change: '+180.1%', trend: 'up' },
        { name: 'Active Now', value: '+573', change: '+19.5%', trend: 'up' },
        { name: 'Bounce Rate', value: '12.5%', change: '-4.1%', trend: 'down' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
                <div key={stat.name} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.name}</p>
                    <div className="mt-2 flex items-baseline justify-between">
                        <p className="text-2xl font-semibold text-neutral-900 dark:text-white">{stat.value}</p>
                        <span className={`
                flex items-center text-xs font-medium px-2 py-0.5 rounded-full
                ${stat.trend === 'up'
                                ? 'text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-900/30'
                                : 'text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-900/30'
                            }
            `}>
                            {stat.trend === 'up' ? <ArrowUpIcon className="w-3 h-3 mr-1" /> : <ArrowDownIcon className="w-3 h-3 mr-1" />}
                            {stat.change}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const DashboardActivity = () => {
    const activity = [
        { user: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', status: 'Success' },
        { user: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', status: 'Processing' },
        { user: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', status: 'Success' },
        { user: 'William Kim', email: 'will@email.com', amount: '+$99.00', status: 'Success' },
        { user: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$299.00', status: 'Failed' },
    ];

    return (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Recent Transactions</h3>
                <p className="text-sm text-neutral-500">You made 265 sales this month.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 uppercase bg-neutral-50 dark:bg-neutral-900/50">
                        <tr>
                            <th className="px-6 py-4 font-medium">Customer</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {activity.map((item, idx) => (
                            <tr key={idx} className="bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-neutral-900 dark:text-white">{item.user}</div>
                                    <div className="text-neutral-500 text-xs">{item.email}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`
                                        inline-flex px-2 py-1 text-xs font-medium rounded-full
                                        ${item.status === 'Success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                                        ${item.status === 'Processing' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                                        ${item.status === 'Failed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                                    `}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-neutral-900 dark:text-white">
                                    {item.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const DashboardChart = () => {
    // Simulated chart visually using CSS/SVG
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm h-full">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Overview</h3>
                <p className="text-sm text-neutral-500">Monthly revenue overview.</p>
            </div>

            {/* Simple CSS Bar Chart Simulation */}
            <div className="h-64 flex items-end justify-between gap-2">
                {[45, 78, 55, 90, 34, 65, 88, 45, 72, 58, 85, 95].map((h, i) => (
                    <div key={i} className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-t-sm relative group overflow-hidden">
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm transition-all duration-500 hover:bg-blue-500"
                            style={{ height: `${h}%` }}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            ${h}k
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-neutral-500">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
            </div>
        </div>
    )
}

// --- Main Template ---

export default function DashboardTemplate() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex font-sans text-neutral-900 dark:text-neutral-100">
            <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        <DashboardStats />

                        <div className="grid lg:grid-cols-2 gap-6 mb-8">
                            <DashboardChart />
                            <DashboardActivity />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
