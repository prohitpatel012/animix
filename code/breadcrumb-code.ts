export const breadcrumbSimpleCode = `"use client";

export default function BreadcrumbSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Home</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Products</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Shoes</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li className="font-semibold text-neutral-900 dark:text-white" aria-current="page">Running</li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbChevronCode = `"use client";

import { BiChevronRight } from "react-icons/bi";

export default function BreadcrumbChevron() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    <li>
                        <a href="#" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">Dashboard</a>
                    </li>
                    <li><BiChevronRight className="text-neutral-400" /></li>
                    <li>
                        <a href="#" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">Team</a>
                    </li>
                    <li><BiChevronRight className="text-neutral-400" /></li>
                    <li className="font-medium text-neutral-900 dark:text-white">Settings</li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbBackgroundCode = `"use client";

export default function BreadcrumbBackground() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav className="flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="text-sm font-medium text-neutral-700 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-neutral-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ml-1 text-sm font-medium text-neutral-700 hover:text-indigo-600 md:ml-2 dark:text-neutral-400 dark:hover:text-white">Templates</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbHomeIconCode = `"use client";

import { BiHome } from "react-icons/bi";

export default function BreadcrumbHomeIcon() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li>
                        <a href="#" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-white transition-colors">
                            <BiHome className="w-4 h-4" />
                            <span className="sr-only">Home</span>
                        </a>
                    </li>
                    <li className="opacity-50">/</li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">Library</a></li>
                    <li className="opacity-50">/</li>
                    <li><span className="font-semibold text-neutral-900 dark:text-white">Data</span></li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbCollapsedCode = `"use client";

export default function BreadcrumbCollapsed() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-neutral-500">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><span>&gt;</span></li>
                    <li><a href="#" className="hover:underline">Docs</a></li>
                    <li><span>&gt;</span></li>
                    <li className="flex items-center justify-center w-6 h-4 text-xs bg-neutral-100 dark:bg-neutral-800 rounded cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700">...</li>
                    <li><span>&gt;</span></li>
                    <li><a href="#" className="hover:underline">Component API</a></li>
                    <li><span>&gt;</span></li>
                    <li className="text-neutral-900 dark:text-white font-semibold">Props</li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbFullWidthCode = `"use client";

export default function BreadcrumbFullWidth() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 w-full border-y border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <a href="#" className="text-neutral-400 hover:text-neutral-500">
                                <span className="sr-only">Home</span>
                                <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 shrink-0 text-neutral-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                                <a href="#" className="ml-4 text-sm font-medium text-neutral-500 hover:text-neutral-700">Projects</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 shrink-0 text-neutral-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                                <a href="#" className="ml-4 text-sm font-medium text-neutral-500 hover:text-neutral-700" aria-current="page">Project Nero</a>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
`;

export const breadcrumbArrowCode = `"use client";

export default function BreadcrumbArrow() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex text-sm font-medium text-white">
                    <li className="flex items-center bg-indigo-600 px-4 py-2 clip-path-arrow">
                        <a href="#">Step 1</a>
                    </li>
                    <li className="flex items-center bg-indigo-500 px-4 pl-8 py-2 -ml-4 clip-path-arrow">
                        <a href="#">Step 2</a>
                    </li>
                    <li className="flex items-center bg-indigo-400 px-4 pl-8 py-2 -ml-4 clip-path-arrow">
                        <a href="#">Step 3</a>
                    </li>
                    <li className="flex items-center bg-neutral-200 text-neutral-600 px-4 pl-8 py-2 -ml-4 clip-path-arrow-end">
                        <span>Step 4</span>
                    </li>
                </ol>
            </nav>
            <style jsx>{\`
            .clip-path-arrow {
                clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%);
            }
            .clip-path-arrow:first-child {
                clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%);
            }
            .clip-path-arrow-end {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%);
            }
        \`}</style>
        </div>
    )
}
`;

export const breadcrumbDarkCode = `"use client";

export default function BreadcrumbDark() {
    return (
        <div className="bg-neutral-900 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Home</a></li>
                    <li className="text-neutral-600">/</li>
                    <li><a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Account</a></li>
                    <li className="text-neutral-600">/</li>
                    <li className="text-white">Security</li>
                </ol>
            </nav>
        </div>
    )
}
`;

export const breadcrumbGlassCode = `"use client";

export default function BreadcrumbGlass() {
    return (
        <div className="bg-linear-to-r from-pink-500 to-violet-600 p-12">
            <nav className="inline-flex px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-3">
                    <li><a href="#" className="hover:text-pink-100 transition-colors font-medium">Explore</a></li>
                    <li className="opacity-50">/</li>
                    <li><a href="#" className="hover:text-pink-100 transition-colors font-medium">Music</a></li>
                    <li className="opacity-50">/</li>
                    <li className="font-bold">Jazz</li>
                </ol>
            </nav>
        </div>
    )
}
`;


export const breadcrumbMinimalCode = `"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function BreadcrumbMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-xs uppercase tracking-widest text-neutral-500">
                    <li><a href="#" className="hover:text-black dark:hover:text-white">Portfolio</a></li>
                    <li><BiRightArrowAlt /></li>
                    <li><a href="#" className="hover:text-black dark:hover:text-white">Photography</a></li>
                    <li><BiRightArrowAlt /></li>
                    <li className="text-black dark:text-white font-bold">Nature</li>
                </ol>
            </nav>
        </div>
    )
}
`;
