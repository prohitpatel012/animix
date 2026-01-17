"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function ContactSplit() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => setSubmitting(false), 2000);
    };

    return (
        <div className="relative bg-white dark:bg-neutral-950">
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    className="h-64 w-full bg-neutral-50 object-cover sm:h-80 lg:absolute lg:h-full cursor-pointer hover:grayscale transition duration-500"
                    src="https://images.unsplash.com/photo-1559136555-930b7e476567?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                />
            </div>
            <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Let's work together</h2>
                        <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            Proin volutpat consequat porttitor culex. Etiam mollis, eros et luctu.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-16">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white">First name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Last name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Email</label>
                                    <div className="mt-2.5">
                                        <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Phone number</label>
                                    <div className="mt-2.5">
                                        <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Message</label>
                                        <p id="message-description" className="text-neutral-400">Max 500 characters</p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                                >
                                    {submitting ? <BiLoaderAlt className="animate-spin h-5 w-5" /> : "Send message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
