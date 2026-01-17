"use client";

import { motion } from "motion/react";

const locations = [
    {
        city: 'Los Angeles',
        address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
    },
    {
        city: 'New York',
        address: ['886 Walter Street', 'New York, NY 12345'],
    },
    {
        city: 'Toronto',
        address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    },
    {
        city: 'London',
        address: ['114 Cobble Lane', 'London N1 2EF'],
    },
];

export default function ContactLocations() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Our Offices</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-2 border-indigo-500 pl-6"
                        >
                            <h3 className="border-l border-transparent font-semibold text-neutral-900 dark:text-white">{location.city}</h3>
                            <address className="border-l border-transparent pt-2 not-italic text-neutral-600 dark:text-neutral-400">
                                {location.address.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </address>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
