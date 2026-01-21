"use client";

import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function DashboardTeamTable() {
    const team = [
        { name: "Courtney Henry", role: "Designer", status: "Active", email: "courtney@example.com", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
        { name: "Tom Cook", role: "Director", status: "Active", email: "tom@example.com", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
        { name: "Whitney Francis", role: "Copywriter", status: "Offline", email: "whitney@example.com", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" },
        { name: "Leonard Krasner", role: "Developer", status: "Active", email: "leonard@example.com", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    ];

    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Team Members</h3>
                <span className="text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2.5 py-0.5 rounded-full">4 Users</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 dark:bg-neutral-950/50 text-neutral-500 uppercase font-medium text-xs">
                        <tr>
                            <th className="px-6 py-3">Member</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {team.map((member, idx) => (
                            <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <img src={member.img} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
                                    <div>
                                        <div className="font-medium text-neutral-900 dark:text-white">{member.name}</div>
                                        <div className="text-xs text-neutral-500">{member.email}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{member.role}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${member.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'}`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                                        <BiDotsHorizontalRounded className="text-xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
