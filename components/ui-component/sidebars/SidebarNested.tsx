"use client";

import { useState } from "react";
import { BiChevronDown, BiFolder, BiFile, BiImage, BiMenu, BiX } from "react-icons/bi";

export default function SidebarNested() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            <aside className={`
        absolute inset-y-0 left-0 z-40 w-64 border-r border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 flex flex-col transition-transform duration-300
        md:translate-x-0 md:static
        ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
                <div className="h-12 flex items-center justify-between px-4 border-b border-neutral-200 dark:border-neutral-800">
                    <span className="text-sm font-semibold text-neutral-500 uppercase">File Explorer</span>
                    <BiX className="cursor-pointer md:hidden text-lg" onClick={() => setIsMobileOpen(false)} />
                </div>

                <nav className="flex-1 p-2 space-y-1 overflow-y-auto text-sm">
                    {/* Open Folder */}
                    <div>
                        <button className="w-full flex items-center gap-1 px-2 py-1.5 text-neutral-700 hover:bg-neutral-100 rounded dark:text-neutral-300 dark:hover:bg-neutral-800">
                            <BiChevronDown className="text-neutral-400" />
                            <BiFolder className="text-blue-500" />
                            <span className="font-medium">Documents</span>
                        </button>
                        <div className="pl-7 space-y-1">
                            <button className="w-full flex items-center gap-2 px-2 py-1.5 text-neutral-600 hover:bg-neutral-100 rounded bg-neutral-200/50 dark:text-neutral-400 dark:bg-neutral-800/50">
                                <BiFile className="text-neutral-400" />
                                presentation.pdf
                            </button>
                            <button className="w-full flex items-center gap-2 px-2 py-1.5 text-neutral-600 hover:bg-neutral-100 rounded dark:text-neutral-400 dark:hover:bg-neutral-800">
                                <BiFile className="text-neutral-400" />
                                budget-2024.xlsx
                            </button>
                        </div>
                    </div>

                    {/* Closed Folder */}
                    <div>
                        <button className="w-full flex items-center gap-1 px-2 py-1.5 text-neutral-700 hover:bg-neutral-100 rounded dark:text-neutral-300 dark:hover:bg-neutral-800">
                            <BiChevronDown className="-rotate-90 text-neutral-400" />
                            <BiFolder className="text-yellow-500" />
                            <span className="font-medium">Images</span>
                        </button>
                    </div>
                    <div>
                        <button className="w-full flex items-center gap-1 px-2 py-1.5 text-neutral-700 hover:bg-neutral-100 rounded dark:text-neutral-300 dark:hover:bg-neutral-800">
                            <BiChevronDown className="-rotate-90 text-neutral-400" />
                            <BiFolder className="text-purple-500" />
                            <span className="font-medium">Downloads</span>
                        </button>
                    </div>
                </nav>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            <main className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-neutral-950 text-neutral-400 relative z-0">
                <BiFile className="text-6xl mb-4 text-neutral-200 dark:text-neutral-800" />
                <p>Select a file to view</p>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mt-2">Hello World</h1>
            </main>
        </div>
    );
}
