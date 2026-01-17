"use client";

import { BiSearch } from "react-icons/bi";

export default function NavSearch() {
    return (
        <div className="bg-neutral-900">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0 font-bold text-white text-xl">AppLogo</div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white">Team</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white">Projects</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="w-full max-w-lg lg:max-w-xs">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <BiSearch className="h-5 w-5 text-neutral-400" />
                                </div>
                                <input
                                    className="block w-full rounded-md border-0 bg-neutral-700 py-1.5 pl-10 pr-3 text-neutral-300 placeholder:text-neutral-400 focus:bg-white focus:text-neutral-900 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Search..."
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
