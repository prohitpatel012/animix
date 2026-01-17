"use client";



export default function AnnouncementWithBadge() {
    return (
        <div className="bg-neutral-900 px-4 py-3 text-white dark:bg-white dark:text-neutral-900">
            <div className="flex items-center justify-center gap-x-6">
                <div className="flex items-center gap-x-3 text-sm font-medium">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20 dark:bg-indigo-600/10 dark:text-indigo-600 dark:ring-indigo-600/20">
                        New
                    </span>
                    <span>
                        Just shipped v1.0! See what&apos;s new inside.
                    </span>
                </div>
                <a
                    href="#"
                    className="flex-none rounded-full bg-neutral-800 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                    Read changelog <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}
