"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { BiCheck } from 'react-icons/bi';

type BillingType = 'project' | 'retainer';

const pricing = {
    project: [
        {
            name: 'Landing Page',
            price: '$1,500',
            description: 'One-off payment for a high converting landing page.',
            features: ['Custom Design', 'Copywriting included', 'Mobile responsive', '1 week delivery'],
        },
        {
            name: 'Web Application',
            price: '$5,000+',
            description: 'Full stack application built with React & Node.',
            features: ['Auth & Database', 'Admin Dashboard', 'Payment Integration', '4 weeks delivery'],
        },
    ],
    retainer: [
        {
            name: 'Maintenance',
            price: '$500/mo',
            description: 'Keep your site running smoothly and securely.',
            features: ['Weekly backups', 'Security updates', '1 hr content updates', 'Uptime monitoring'],
        },
        {
            name: 'Development',
            price: '$2,000/mo',
            description: 'Ongoing development for your product.',
            features: ['20 hours / month', 'Priority support', 'Code reviews', 'Weekly sync calls'],
        },
    ],
};

export default function PricingFreelancer() {
    const [billing, setBilling] = useState<BillingType>('project');

    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Hire me</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Flexibile options for every project type.</p>

                    <div className="mt-8 flex justify-center">
                        <div className="grid grid-cols-2 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900">
                            <button
                                onClick={() => setBilling('project')}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${billing === 'project' ? 'bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'}`}
                            >
                                Project Based
                            </button>
                            <button
                                onClick={() => setBilling('retainer')}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${billing === 'retainer' ? 'bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'}`}
                            >
                                Monthly Retainer
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid max-w-lg grid-cols-1 mx-auto gap-8 lg:max-w-none lg:grid-cols-2">
                    {pricing[billing].map((tier) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 shadow-sm flex flex-col"
                        >
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{tier.name}</h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-400 min-h-[48px]">{tier.description}</p>
                            <div className="mt-6 text-4xl font-bold text-indigo-600 dark:text-indigo-400">{tier.price}</div>

                            <ul className="mt-8 space-y-3 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3 text-sm text-neutral-600 dark:text-neutral-300">
                                        <BiCheck className="h-5 w-5 text-indigo-500" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold py-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition">
                                Book {billing === 'project' ? 'Project' : 'Retainer'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
