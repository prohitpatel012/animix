"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function Sidebar({ categories }: { categories: string[] }) {
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category')
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                className="lg:hidden fixed bottom-4 right-4 z-50 bg-neutral-900 text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="h-full overflow-y-auto p-6">
                    <h2 className="text-lg font-bold mb-6 px-2">Templates</h2>

                    <nav className="space-y-1">
                        <Link
                            href="/templates"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${!currentCategory
                                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                }`}
                        >
                            All Templates
                        </Link>

                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/templates?category=${encodeURIComponent(category)}`}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentCategory === category
                                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                {category}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
