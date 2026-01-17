"use client";

import { useState } from "react";
import { BiHash, BiPlus, BiMenu, BiX } from "react-icons/bi";

export default function SidebarSlackStyle() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            {/* Mobile Trigger in Header Area */}
            <div className="absolute top-0 left-0 right-0 h-14 z-30 flex items-center px-4 md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                <button onClick={() => setIsMobileOpen(true)} className="mr-4 text-neutral-600 dark:text-neutral-400">
                    <BiMenu className="text-xl" />
                </button>
                <span className="font-bold text-neutral-900 dark:text-white"># design-team</span>
            </div>

            {/* Sidebar */}
            <aside className={`
        absolute inset-y-0 left-0 z-40 w-64 bg-purple-900 text-purple-100 flex flex-col transition-transform duration-300
        md:translate-x-0 md:static
        ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
                <div className="h-14 flex items-center px-4 border-b border-purple-800 justify-between">
                    <span className="font-bold text-white">Acme Corp</span>
                    <div className="flex gap-2">
                        <BiPlus className="bg-white text-purple-900 rounded-full p-0.5 text-lg" />
                        <BiX className="text-white text-xl md:hidden cursor-pointer" onClick={() => setIsMobileOpen(false)} />
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
                    <div>
                        <div className="flex items-center justify-between px-2 mb-1 group cursor-pointer">
                            <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Channels</span>
                            <BiPlus className="opacity-0 group-hover:opacity-100" />
                        </div>
                        <div className="space-y-1">
                            <a href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-purple-800 text-sm opacity-90 hover:opacity-100">
                                <BiHash className="opacity-70" /> general
                            </a>
                            <a href="#" className="flex items-center gap-2 px-2 py-1 rounded bg-purple-800 text-white text-sm font-medium">
                                <BiHash /> design-team
                            </a>
                            <a href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-purple-800 text-sm opacity-90 hover:opacity-100">
                                <BiHash className="opacity-70" /> marketing
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between px-2 mb-1">
                            <span className="text-sm font-medium opacity-80">Direct Messages</span>
                        </div>
                        <div className="space-y-1">
                            <a href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-purple-800 text-sm opacity-90">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span> Alice
                            </a>
                            <a href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-purple-800 text-sm opacity-90">
                                <span className="w-2 h-2 rounded-full border border-white opacity-50"></span> Bob
                            </a>
                        </div>
                    </div>
                </nav>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            {/* Main Content */}
            <main className="flex-1 flex flex-col bg-white dark:bg-neutral-950 pt-14 md:pt-0">
                <div className="h-14 border-b border-neutral-200 dark:border-neutral-800 md:flex items-center px-6 hidden">
                    <span className="font-bold text-neutral-900 dark:text-white flex items-center gap-1"><BiHash className="text-neutral-400" /> design-team</span>
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center text-neutral-400">
                        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Welcome to #design-team!</h3>
                        <p>This is the start of the design-team channel.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
