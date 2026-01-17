"use client";

import { BiTimeFive, BiCalendarEvent, BiBell } from "react-icons/bi";

const timeline = [
    {
        name: 'Applications Open',
        description: 'Submit your application through our online portal.',
        date: 'Aug 1, 2024',
        icon: BiCalendarEvent,
    },
    {
        name: 'Interview Process',
        description: 'Selected candidates will be invited for video interviews.',
        date: 'Sep 15, 2024',
        icon: BiTimeFive,
    },
    {
        name: 'Final Selection',
        description: 'Offer letters are sent out to successful applicants.',
        date: 'Oct 1, 2024',
        icon: BiBell,
    },
]

export default function FeatureListTimeline() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Roadmap</h2>
                </div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={item.name} className="relative flex gap-x-6">
                                <div className={`absolute left-0 top-0 flex w-6 justify-center ${index === timeline.length - 1 ? 'h-6' : '-bottom-8'}`}>
                                    <div className="w-px bg-neutral-200 dark:bg-neutral-800" />
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white dark:bg-neutral-950">
                                    <item.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                </div>
                                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="py-0.5 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                                            <span className="font-medium text-neutral-900 dark:text-white">{item.name}</span>
                                        </div>
                                        <time dateTime={item.date} className="flex-none py-0.5 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                                            {item.date}
                                        </time>
                                    </div>
                                    <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
