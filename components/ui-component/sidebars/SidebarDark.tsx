"use client";

import { useState } from "react";
import { BiHome, BiPieChartAlt2, BiFolder, BiMessageSquareDetail, BiHelpCircle, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";

export default function SidebarDark() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full rounded-xl overflow-hidden bg-neutral-900 text-white relative">
            {/* Mobile Toggle */}
            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-neutral-800 rounded-md text-white border border-neutral-700">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Desktop Sidebar (Static) */}
            <aside className="hidden md:flex w-64 bg-neutral-900 flex-col border-r border-neutral-800 shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar (Drawer) */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="absolute inset-0 bg-black/50 z-30 md:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="absolute inset-y-0 left-0 z-40 w-64 bg-neutral-900 flex flex-col border-r border-neutral-800 md:hidden"
                        >
                            <SidebarContent onClose={() => setIsMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 bg-neutral-800 m-2 rounded-xl flex items-center justify-center border border-neutral-700 relative z-0">
                <div className="text-center">
                    <h1 className="text-xl font-bold">Hello World</h1>
                </div>
            </main>
        </div>
    );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
    return (
        <>
            <div className="h-20 flex items-center justify-between px-8">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded bg-indigo-500 mr-3"></div>
                    <span className="text-lg font-bold tracking-tight">BRAND</span>
                </div>
                {onClose && (
                    <button onClick={onClose} className="md:hidden text-neutral-400">
                        <BiX className="text-xl" />
                    </button>
                )}
            </div>

            <nav className="flex-1 px-4 space-y-2">
                <div className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Menu</div>
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-white bg-neutral-800 rounded-lg">
                    <BiHome className="text-lg text-indigo-400" />
                    Overview
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
                    <BiPieChartAlt2 className="text-lg" />
                    Analytics
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
                    <BiFolder className="text-lg" />
                    Projects
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
                    <BiMessageSquareDetail className="text-lg" />
                    Messages
                    <span className="ml-auto bg-indigo-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
                </a>
            </nav>

            <div className="p-4 border-t border-neutral-800">
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                    <BiHelpCircle className="text-lg" />
                    Support
                </a>
            </div>
        </>
    );
}
