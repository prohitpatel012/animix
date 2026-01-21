export const userDashboardCode = `"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
    BiTrendingUp, BiUser, BiDollar, BiShoppingBag, 
    BiCheckCircle, BiMessageSquareDetail, BiCreditCard, BiUserPlus,
    BiMap, BiLink,
    BiInfoCircle, BiCheck, BiError, BiX,
    BiTimeFive, BiPlus 
} from "react-icons/bi";

// --- Sub Components ---

function DashboardStatsGrid() {
    const stats = [
        { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: BiDollar, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { title: "Subscriptions", value: "+2350", change: "+180.1%", icon: BiUser, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { title: "Sales", value: "+12,234", change: "+19%", icon: BiShoppingBag, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { title: "Active Now", value: "+573", change: "+201", icon: BiTrendingUp, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">{stat.value}</h3>
                        </div>
                        <div className={\`p-2 rounded-lg \${stat.bg} \${stat.color}\`}>
                            <stat.icon className="text-xl" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 font-medium">{stat.change}</span>
                        <span className="text-neutral-400 ml-2">from last month</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function DashboardActivityFeed() {
    const activities = [
        { id: 1, user: "Alice Smith", action: "completed task", target: "Website Redesign", time: "2 min ago", icon: BiCheckCircle, color: "text-green-500" },
        { id: 2, user: "Bob Jones", action: "commented on", target: "Marketing Campaign", time: "1 hour ago", icon: BiMessageSquareDetail, color: "text-blue-500" },
        { id: 3, user: "System", action: "processed payment for", target: "Invoice #1023", time: "3 hours ago", icon: BiCreditCard, color: "text-purple-500" },
        { id: 4, user: "New User", action: "signed up", target: "", time: "5 hours ago", icon: BiUserPlus, color: "text-orange-500" },
    ];

    return (
        <div className="w-full">
            <div className="space-y-6">
                {activities.map((activity, index) => (
                    <div key={activity.id} className="relative pl-6 sm:pl-8 group">
                        {/* Timeline Line */}
                        {index !== activities.length - 1 && (
                            <div className="absolute left-2.5 top-6 bottom-[-24px] w-0.5 bg-neutral-200 dark:bg-neutral-800 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-colors"></div>
                        )}
                        <div className={\`absolute left-0 top-1 p-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 \${activity.color}\`}>
                            <activity.icon className="text-md" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                <span className="font-semibold text-neutral-900 dark:text-white">{activity.user}</span> {activity.action} <span className="font-medium">{activity.target}</span>
                            </p>
                            <span className="text-xs text-neutral-400 whitespace-nowrap mt-1 sm:mt-0">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white border-t border-neutral-100 dark:border-neutral-800 transition-colors">
                View All Activity
            </button>
        </div>
    );
}

function DashboardUserCard() {
    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden text-center sm:text-left">
            <div className="h-24 bg-linear-to-r from-blue-500 to-purple-600"></div>
            <div className="px-6 pb-6 relative">
                <div className="absolute -top-12 left-6 p-1 bg-white dark:bg-neutral-900 rounded-full">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                </div>
                <div className="pt-16">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Sarah Connor</h2>
                    <p className="text-sm text-neutral-500 font-medium">Product Designer</p>

                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                            <BiMap /> San Francisco, CA
                        </div>
                        <div className="flex items-center gap-1">
                            <BiLink /> sarah.design
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">1.2k</span>
                            <span className="text-xs text-neutral-500">Followers</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">54</span>
                            <span className="text-xs text-neutral-500">Projects</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">85</span>
                            <span className="text-xs text-neutral-500">Reviews</span>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                        <button className="flex-1 py-2 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                            Follow
                        </button>
                        <button className="flex-1 py-2 px-4 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardNotifications() {
    const notifications = [
        { title: "System maintenance scheduled", desc: "Dec 18, 2023 at 02:00 AM", type: "info", icon: BiInfoCircle, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
        { title: "Payment successful", desc: "Invoice #2390 paid", type: "success", icon: BiCheck, color: "text-green-500 bg-green-50 dark:bg-green-900/20" },
        { title: "Storage limit reached", desc: "Please upgrade your plan", type: "warning", icon: BiError, color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
    ];

    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Notifications</h3>
                <button className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm">Mark all read</button>
            </div>

            <div className="space-y-4">
                {notifications.map((note, idx) => (
                    <div key={idx} className="flex gap-4 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors relative group">
                        <div className={\`w-10 h-10 rounded-full flex items-center justify-center shrink-0 \${note.color}\`}>
                            <note.icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{note.title}</h4>
                            <p className="text-xs text-neutral-500 mt-0.5">{note.desc}</p>
                        </div>
                        <button className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-900 transition-all">
                            <BiX className="text-lg" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DashboardProjects() {
    const projects = [
        { name: "Website Redesign", progress: 75, due: "2 days left", members: 3, color: "bg-purple-600" },
        { name: "Mobile App", progress: 30, due: "2 weeks left", members: 5, color: "bg-blue-600" },
        { name: "Marketing APIs", progress: 90, due: "Done soon", members: 2, color: "bg-green-600" },
        { name: "Internal Tools", progress: 15, due: "1 month left", members: 4, color: "bg-orange-600" },
    ];

    return (
        <div className="grid grid-cols-1 gap-4">
            {projects.map((project, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-neutral-900 dark:text-white">{project.name}</h4>
                        <span className="text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded-md flex items-center gap-1">
                            <BiTimeFive /> {project.due}
                        </span>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-neutral-500">Progress</span>
                            <span className="text-neutral-900 dark:text-white font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <div className={\`h-full \${project.color}\`} style={{ width: \`\${project.progress}%\` }}></div>
                        </div>
                    </div>

                    <div className="flex -space-x-2">
                        {[...Array(project.members)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-700"></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function DashboardTasks() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Design new landing page", done: false },
        { id: 2, text: "Fix navigation bug", done: true },
        { id: 3, text: "Update documentation", done: false },
    ]);

    const toggle = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">My Tasks</h3>
                <button className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500">
                    <BiPlus className="text-xl" />
                </button>
            </div>

            <div className="space-y-3">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        onClick={() => toggle(task.id)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 group cursor-pointer transition-colors"
                    >
                        <div className={\`w-5 h-5 rounded border flex items-center justify-center transition-colors \${task.done ? 'bg-blue-600 border-blue-600 text-white' : 'border-neutral-300 dark:border-neutral-600'}\`}>
                            {task.done && <BiCheck className="text-sm" />}
                        </div>
                        <span className={\`text-sm \${task.done ? 'text-neutral-400 line-through' : 'text-neutral-700 dark:text-neutral-200'}\`}>
                            {task.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    className="w-full bg-transparent text-sm outline-none text-neutral-900 dark:text-white placeholder-neutral-400"
                />
            </div>
        </div>
    );
}

// --- Main Layout ---

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
    );
}
`;
