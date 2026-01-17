"use client";

import { motion } from "motion/react";
import { BiEnvelope } from "react-icons/bi";

export default function ContactSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-neutral-100 dark:divide-neutral-800 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Get in touch</h2>
                            <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                            <div className="mt-8 flex gap-4 text-neutral-600 dark:text-neutral-400">
                                <BiEnvelope className="h-6 w-6" />
                                <span>hello@example.com</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-10">
                                <h3 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">Sales</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd><a className="font-semibold text-indigo-600" href="mailto:sales@example.com">sales@example.com</a></dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone</dt>
                                        <dd>+1 (555) 905-2345</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-10">
                                <h3 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">Support</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd><a className="font-semibold text-indigo-600" href="mailto:support@example.com">support@example.com</a></dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone</dt>
                                        <dd>+1 (555) 905-3456</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-10">
                                <h3 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">Media Inquiries</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd><a className="font-semibold text-indigo-600" href="mailto:press@example.com">press@example.com</a></dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone</dt>
                                        <dd>+1 (555) 905-4567</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-10">
                                <h3 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">Partnerships</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd><a className="font-semibold text-indigo-600" href="mailto:partners@example.com">partners@example.com</a></dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Phone</dt>
                                        <dd>+1 (555) 905-5678</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
