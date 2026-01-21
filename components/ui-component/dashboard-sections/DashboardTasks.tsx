"use client";

import { useState } from "react";
import { BiPlus, BiCheck } from "react-icons/bi";

export default function DashboardTasks() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Design new landing page", done: false },
        { id: 2, text: "Fix navigation bug", done: true },
        { id: 3, text: "Update documentation", done: false },
    ]);

    const toggle = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    return (
        <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
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
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${task.done ? 'bg-blue-600 border-blue-600 text-white' : 'border-neutral-300 dark:border-neutral-600'}`}>
                            {task.done && <BiCheck className="text-sm" />}
                        </div>
                        <span className={`text-sm ${task.done ? 'text-neutral-400 line-through' : 'text-neutral-700 dark:text-neutral-200'}`}>
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
