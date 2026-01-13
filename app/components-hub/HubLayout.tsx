'use client'

import React, { useState } from 'react'
import MainComponentArea from '../../components/MainComponentArea'
import Sidebar from '../../components/Sidebar'
import { motion, AnimatePresence } from 'motion/react'
import { HiMenuAlt2 } from 'react-icons/hi'

type Props = {
    category: string
    components: any[]
}

export default function HubLayout({ category, components }: Props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="flex max-w-7xl mx-auto">

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-64 fixed h-[calc(100vh-4rem)] top-16 left-0 overflow-y-auto border-r border-neutral-200 dark:border-neutral-800">
                    <Sidebar />
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden sticky top-16 z-30 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    >
                        <HiMenuAlt2 className="size-5" />
                        <span>{category} Components</span>
                    </button>
                </div>

                {/* Main Content */}
                <main className="flex-1 lg:pl-64 min-w-0">
                    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                                {category}
                            </h1>
                            <p className="text-neutral-500 text-lg">
                                Beautifully designed {category.toLowerCase()} components ready to copy and paste.
                            </p>
                        </div>

                        <MainComponentArea
                            components={components}
                            onSelect={() => { }}
                        />
                    </div>
                </main>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-neutral-900 z-50 shadow-xl lg:hidden"
                        >
                            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                                <span className="font-semibold text-neutral-900 dark:text-white">Menu</span>
                                <button onClick={() => setIsDrawerOpen(false)} className="text-neutral-500">✕</button>
                            </div>

                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
