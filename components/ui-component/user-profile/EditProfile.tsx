'use client'

import React from 'react'


export default function EditProfile() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm"
            >
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">EditProfile</h2>
                    <p className="text-neutral-500 text-sm mt-1">Manage your EditProfile settings and preferences.</p>
                </div>
                <div className="p-6 space-y-6">
                    {/* Placeholder content for EditProfile */}
                    <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300 dark:border-neutral-700">
                        <span className="text-neutral-400 font-medium">EditProfile Content Demo</span>
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
            </div>
        </div>
    )
}

