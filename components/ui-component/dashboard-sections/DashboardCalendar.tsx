"use client";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function DashboardCalendar() {
    const dates = Array.from({ length: 35 }, (_, i) => i + 1);

    return (
        <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-neutral-900 dark:text-white">October 2023</h3>
                <div className="flex gap-1">
                    <button className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"><BiChevronLeft /></button>
                    <button className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"><BiChevronRight /></button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-neutral-400 font-medium">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {dates.map((date, i) => {
                    const isActive = date === 14;
                    const hasEvent = [4, 14, 22].includes(date);
                    return (
                        <div
                            key={i}
                            className={`
                                aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 relative
                                ${isActive ? 'bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700' : 'text-neutral-700 dark:text-neutral-300'}
                                ${date > 31 ? 'invisible' : ''}
                            `}
                        >
                            {date <= 31 ? date : ''}
                            {hasEvent && date <= 31 && (
                                <span className={`w-1 h-1 rounded-full absolute bottom-1.5 ${isActive ? 'bg-white' : 'bg-blue-500'}`}></span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-10 rounded-full bg-blue-500"></div>
                    <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Team Meeting</h4>
                        <p className="text-xs text-neutral-500">10:00 AM - 11:30 AM</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1 h-10 rounded-full bg-orange-500"></div>
                    <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Product Launch</h4>
                        <p className="text-xs text-neutral-500">02:00 PM - 04:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
