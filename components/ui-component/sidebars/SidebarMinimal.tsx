"use client";

import { useState } from "react";
import { BiLayer, BiGridAlt, BiUser, BiCog, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";

export default function SidebarMinimal() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">
            {/* Mobile Toggle */}
            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Desktop Sidebar (Static Rail) */}
            <aside className="hidden md:flex w-20 border-r border-neutral-200 bg-white flex-col items-center py-6 dark:border-neutral-800 dark:bg-neutral-950 shrink-0">
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
                            className="absolute inset-0 bg-black/20 z-30 md:hidden"
                        />
                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="absolute inset-y-0 left-0 z-40 w-20 border-r border-neutral-200 bg-white flex flex-col items-center py-6 dark:border-neutral-800 dark:bg-neutral-950 md:hidden"
                        >
                            <SidebarContent onClose={() => setIsMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center relative z-0">
                <span className="text-3xl font-light text-neutral-300 dark:text-neutral-700">Hello World</span>
            </main>
        </div>
    );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
    return (
        <>
            <div className="mb-8">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">B</div>
            </div>

            <nav className="flex-1 space-y-4 w-full px-2">
                <button className="w-full aspect-square flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                    <BiGridAlt className="text-2xl" />
                </button>
                <button className="w-full aspect-square flex items-center justify-center rounded-xl text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors">
                    <BiLayer className="text-2xl" />
                </button>
                <button className="w-full aspect-square flex items-center justify-center rounded-xl text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors">
                    <BiUser className="text-2xl" />
                </button>
            </nav>

            {onClose && (
                <button
                    className="mt-auto w-10 h-10 flex items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors md:hidden"
                    onClick={onClose}
                >
                    <BiX className="text-2xl" />
                </button>
            )}

            <button className="hidden md:flex mt-4 w-10 h-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors">
                <BiCog className="text-2xl" />
            </button>
        </>
    );
}
