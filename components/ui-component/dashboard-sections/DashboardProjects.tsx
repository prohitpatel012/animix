"use client";

import { BiTimeFive } from "react-icons/bi";

export default function DashboardProjects() {
    const projects = [
        { name: "Website Redesign", progress: 75, due: "2 days left", members: 3, color: "bg-purple-600" },
        { name: "Mobile App", progress: 30, due: "2 weeks left", members: 5, color: "bg-blue-600" },
        { name: "Marketing APIs", progress: 90, due: "Done soon", members: 2, color: "bg-green-600" },
        { name: "Internal Tools", progress: 15, due: "1 month left", members: 4, color: "bg-orange-600" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <div className={`h-full ${project.color}`} style={{ width: `${project.progress}%` }}></div>
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
