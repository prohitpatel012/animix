"use client";

import { motion } from "motion/react";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoGithub } from "react-icons/bi";

const team = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Dries Vincent',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
];

export default function AboutTeam() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {team.map((person, index) => (
                        <motion.li
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group hover:bg-neutral-50 dark:hover:bg-neutral-900 p-6 rounded-3xl transition-colors"
                        >
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition duration-500" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-neutral-900 dark:text-white group-hover:text-indigo-600 transition-colors">{person.name}</h3>
                            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{person.role}</p>
                            <ul role="list" className="mt-6 flex gap-x-6">
                                <li>
                                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                                        <span className="sr-only">Twitter</span>
                                        <BiLogoTwitter className="h-5 w-5" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                                        <span className="sr-only">LinkedIn</span>
                                        <BiLogoLinkedin className="h-5 w-5" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                                        <span className="sr-only">GitHub</span>
                                        <BiLogoGithub className="h-5 w-5" />
                                    </a>
                                </li>
                            </ul>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
