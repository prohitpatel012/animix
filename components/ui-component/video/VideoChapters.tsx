"use client";

import { useState } from "react";

const chapters = [
    { time: "00:00", label: "Intro", active: true },
    { time: "01:15", label: "Installation", active: false },
    { time: "03:45", label: "Configuration", active: false },
    { time: "06:20", label: "Deploying", active: false },
]

export default function VideoChapters() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row">
                    <div className="flex-1 bg-black aspect-video md:aspect-auto min-h-[300px] flex items-center justify-center text-white relative">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700">
                            <div className="h-full bg-red-600 w-1/3"></div>
                        </div>
                        <span className="text-2xl font-bold opacity-50">Video Player</span>
                    </div>
                    <div className="w-full md:w-80 bg-neutral-50 dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 p-6">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-6">Chapters</h3>
                        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-700 ml-3 space-y-8">
                            {chapters.map((chapter, i) => (
                                <div key={i} className="relative pl-6">
                                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${chapter.active ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-neutral-300 dark:bg-neutral-800 dark:border-neutral-600'}`}></div>
                                    <div className={`text-sm font-mono mb-1 ${chapter.active ? 'text-indigo-600' : 'text-neutral-500'}`}>{chapter.time}</div>
                                    <div className={`font-medium cursor-pointer hover:text-indigo-600 ${chapter.active ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>
                                        {chapter.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
