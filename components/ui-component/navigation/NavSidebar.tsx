"use client";

import { BiHome, BiUser, BiFolder, BiCalendar, BiCog, BiLogOut } from "react-icons/bi";

export default function NavSidebar() {
    return (
        <div className="min-h-[500px] flex bg-neutral-100 dark:bg-neutral-900">
            <div className="w-20 lg:w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 flex flex-col justify-between py-6">
                <div className="px-4 lg:px-6">
                    <div className="h-8 w-8 bg-indigo-600 rounded-lg mb-8 flex items-center justify-center text-white font-bold lg:w-auto lg:h-auto lg:bg-transparent lg:text-indigo-600 lg:text-xl lg:px-0">
                        <span className="lg:hidden">L</span>
                        <span className="hidden lg:block">LOGO</span>
                    </div>
                    <nav className="space-y-2">
                        {[
                            { icon: BiHome, label: "Dashboard", active: true },
                            { icon: BiUser, label: "Team", active: false },
                            { icon: BiFolder, label: "Projects", active: false },
                            { icon: BiCalendar, label: "Calendar", active: false },
                            { icon: BiCog, label: "Settings", active: false },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href="#"
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${item.active ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'}`}
                            >
                                <item.icon className="w-6 h-6" />
                                <span className="hidden lg:block text-sm font-medium">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="px-4 lg:px-6">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-neutral-50 dark:hover:bg-neutral-900">
                        <BiLogOut className="w-6 h-6" />
                        <span className="hidden lg:block text-sm font-medium">Logout</span>
                    </a>
                </div>
            </div>
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
                <div className="rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 h-64 w-full flex items-center justify-center text-neutral-400">
                    Page Content
                </div>
            </div>
        </div>
    )
}
