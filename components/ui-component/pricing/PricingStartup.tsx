"use client";

import { motion } from "motion/react";
import { BiRocket, BiBot, BiLineChart } from "react-icons/bi";

const plans = [
    {
        icon: BiRocket,
        name: 'Launch',
        price: 'Free',
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        description: 'For hobbyists and side projects to start quickly.'
    },
    {
        icon: BiBot,
        name: 'Booster',
        price: '$29',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        description: 'Automate your workflow and save hours every week.'
    },
    {
        icon: BiLineChart,
        name: 'Scale',
        price: '$99',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        description: 'Advanced analytics for serious growth hackers.'
    }
];

export default function PricingStartup() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {plans.map((plan, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
                            <div className={`rounded-xl ${plan.bg} w-12 h-12 flex items-center justify-center mb-6`}>
                                <plan.icon className={`text-2xl ${plan.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{plan.name}</h3>
                            <div className="text-3xl font-black text-neutral-900 dark:text-white mb-4">{plan.price}</div>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 h-12">{plan.description}</p>

                            <button className="w-full rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold py-3 px-4 hover:opacity-90 transition">
                                Select {plan.name}
                            </button>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
