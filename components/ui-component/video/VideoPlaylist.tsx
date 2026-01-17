"use client";

const playlist = [
    { title: "Getting Started", duration: "02:30", active: true },
    { title: "Advanced Features", duration: "05:15", active: false },
    { title: "Team Management", duration: "03:45", active: false },
    { title: "API Integration", duration: "08:20", active: false },
]

export default function VideoPlaylist() {
    return (
        <div className="bg-white dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="aspect-video bg-neutral-900 w-full rounded-xl shadow-lg overflow-hidden flex items-center justify-center text-white">
                            Main Player Area
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Getting Started</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mt-2">Brief introduction to the core concepts.</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 h-fit">
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Course Content</h4>
                        <div className="space-y-2">
                            {playlist.map((item, idx) => (
                                <div key={idx} className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${item.active ? 'bg-indigo-600 text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'}`}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm opacity-70">{idx + 1}</span>
                                        <span className="font-medium text-sm">{item.title}</span>
                                    </div>
                                    <span className="text-xs opacity-70">{item.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
