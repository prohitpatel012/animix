'use client'

import React, { useState } from 'react'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: Props) {
    const [query, setQuery] = useState('')

    const items = [
        { type: 'Category', name: 'Buttons' },
        { type: 'Category', name: 'Cards' },

        ...buttonComponents.map((item: any) => ({
            type: 'Button',
            name: item.name,
        })),

        ...cardsComponents.map((item: any) => ({
            type: 'Card',
            name: item.name,
        })),
    ]

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    )

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search components..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
                />

                <div className="mt-4 max-h-64 overflow-y-auto space-y-1">
                    {filteredItems.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">
                            No results found
                        </p>
                    )}

                    {filteredItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={onClose}
                            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                        >
                            <span className="text-sm font-medium">{item.name}</span>
                            <span className="ml-2 text-xs text-gray-400">
                                {item.type}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
