"use client";

import { useState } from "react";
import { BiHome, BiUser, BiCog, BiLogOut, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";

export default function SidebarSimple() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">
            {/* Mobile Toggle */}
            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white border border-neutral-200 rounded-md shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Desktop Sidebar (Static) */}
            <aside className="hidden md:block w-64 bg-neutral-50 border-r border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar (Drawer) */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                        />
                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="absolute inset-y-0 left-0 z-40 w-64 bg-neutral-50 border-r border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 md:hidden"
                        >
                            <SidebarContent onClose={() => setIsMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center bg-white dark:bg-neutral-950 relative z-0">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Hello World</h1>
                    <p className="text-neutral-500 mt-2">Resize window to test mobile sidebar.</p>
                </div>
            </main>
        </div>
    );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-lg font-bold text-neutral-900 dark:text-white">Dashboard</span>
                {onClose && (
                    <button onClick={onClose} className="md:hidden text-neutral-500">
                        <BiX className="text-xl" />
                    </button>
                )}
            </div>

            <nav className="p-4 space-y-1 flex-1">
                <a href="#" className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-medium text-blue-600 shadow-sm dark:bg-neutral-800 dark:text-blue-400">
                    <BiHome className="text-lg" />
                    Home
                </a>
                <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                    <BiUser className="text-lg" />
                    Users
                </a>
                <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                    <BiCog className="text-lg" />
                    Settings
                </a>
            </nav>

            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10">
                    <BiLogOut className="text-lg" />
                    Logout
                </a>
            </div>
        </div>
    );
}
