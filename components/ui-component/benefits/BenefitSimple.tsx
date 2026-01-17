"use client";

import { BiTrendingUp, BiTimeFive, BiHappyBeaming } from "react-icons/bi";

const benefits = [
    {
        title: "Increase Revenue",
        description: "Optimize your sales funnel and convert more visitors into paying customers with our proven tools.",
        icon: BiTrendingUp,
    },
    {
        title: "Save Time",
        description: "Automate repetitive tasks and focus on what truly matters - growing your business.",
        icon: BiTimeFive,
    },
    {
        title: "Happy Customers",
        description: "Provide top-notch support and experiences that keep your users coming back for more.",
        icon: BiHappyBeaming,
    },
];

export default function BenefitSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Why choose us?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        We deliver real results. Here is how we help you succeed.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                                    <benefit.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-bold leading-7 text-neutral-900 dark:text-white">
                                    {benefit.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                    <p className="flex-auto">{benefit.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
