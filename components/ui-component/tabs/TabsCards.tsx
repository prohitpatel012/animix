"use client";

import { useState } from "react";
import { BiBox, BiCloud, BiBarChart } from "react-icons/bi";

const options = [
    { name: "Personal", price: "$10", icon: BiBox },
    { name: "Professional", price: "$40", icon: BiBarChart },
    { name: "Enterprise", price: "$100", icon: BiCloud },
]

export default function TabsCards() {
    const [selected, setSelected] = useState(1);

    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => setSelected(i)}
                            className={`
                            p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center text-center
                            ${selected === i
                                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                    : 'border-neutral-100 dark:border-neutral-800 hover:border-neutral-300'
                                }
                         `}
                        >
                            <opt.icon className={`w-8 h-8 mb-3 ${selected === i ? 'text-indigo-600' : 'text-neutral-400'}`} />
                            <div className={`font-semibold ${selected === i ? 'text-indigo-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>{opt.name}</div>
                            <div className={`text-sm mt-1 ${selected === i ? 'text-indigo-700 dark:text-indigo-300' : 'text-neutral-400'}`}>Starts at {opt.price}</div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
