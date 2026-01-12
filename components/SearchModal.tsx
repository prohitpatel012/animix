'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'

type Props = {
    isOpen: boolean
    onClose: () => void
}

type SearchItem = {
    type: string
    name: string
    url: string
    description?: string
}

export default function SearchModal({ isOpen, onClose }: Props) {
    const [query, setQuery] = useState('')
    const [serverItems, setServerItems] = useState<SearchItem[]>([])
    const router = useRouter()

    useEffect(() => {
        if (isOpen) {
            fetch('/api/search')
                .then(res => res.json())
                .then(data => setServerItems(data))
                .catch(err => console.error('Failed to fetch search items', err))
        }
    }, [isOpen])

    const items: SearchItem[] = [
        ...serverItems,
        // Map existing static components to the hub
        ...buttonComponents.map((item: any) => ({
            type: 'Component',
            name: item.name,
            url: '/components-hub?category=Buttons', // Detailed link if possible
            description: 'UI Component'
        })),
        ...cardsComponents.map((item: any) => ({
            type: 'Component',
            name: item.name,
            url: '/components-hub?category=Cards',
            description: 'UI Component'
        })),
    ]

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    )

    const handleSelect = (url: string) => {
        router.push(url)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl shadow-2xl w-full max-w-xl relative mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-4">
                    <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search documentation, components, blogs..."
                        className="w-full bg-transparent text-lg outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
                    />
                    <button onClick={onClose} className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        ✕
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto space-y-1">
                    {filteredItems.length === 0 && query !== '' && (
                        <p className="text-sm text-neutral-500 text-center py-8">
                            No results found for "{query}"
                        </p>
                    )}

                    {filteredItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(item.url)}
                            className="w-full text-left px-4 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {item.name}
                                </span>
                                <span className="text-xs uppercase tracking-wider text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                                    {item.type}
                                </span>
                            </div>
                            {item.description && (
                                <p className="text-xs text-neutral-500 mt-1 line-clamp-1 block">
                                    {item.description}
                                </p>
                            )}
                        </button>
                    ))}

                    {query === '' && serverItems.length === 0 && (
                        <div className="py-12 text-center text-neutral-400 text-sm">
                            Type to search...
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
