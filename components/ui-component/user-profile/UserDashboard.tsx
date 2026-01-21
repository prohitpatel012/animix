'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function UserDashboard() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm"
            >
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">UserDashboard</h2>
                    <p className="text-neutral-500 text-sm mt-1">Manage your UserDashboard settings and preferences.</p>
                </div>
                <div className="p-6 space-y-6">
                    {/* Placeholder content for UserDashboard */}
                    <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300 dark:border-neutral-700">
                        <span className="text-neutral-400 font-medium">UserDashboard Content Demo</span>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
                            Cancel
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm">
                            Save Changes
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
