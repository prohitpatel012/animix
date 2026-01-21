'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
    DashboardStatsGrid,
    DashboardActivityFeed,
    DashboardUserCard,
    DashboardTasks,
    DashboardProjects,
    DashboardNotifications
} from '@/components/ui-component/dashboard-sections'

export default function UserDashboard() {
    return (
        <div className="p-4 lg:p-6 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row gap-6 items-start">
                {/* Left Sidebar / Profile Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full xl:w-80 space-y-6 shrink-0"
                >
                    <DashboardUserCard />
                    <DashboardNotifications />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 space-y-6 min-w-0"
                >
                    <DashboardStatsGrid />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <DashboardProjects />
                        <DashboardTasks />
                    </div>

                    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Recent Activity</h3>
                        <DashboardActivityFeed />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
