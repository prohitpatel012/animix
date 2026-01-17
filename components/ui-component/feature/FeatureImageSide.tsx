"use client";

import { BiCheckCircle } from "react-icons/bi";

const features = [
    {
        name: "Integrated CI/CD pipelines",
        description: "Automate your testing and deployment workflows with our built-in tools."
    },
    {
        name: "Automated scaling",
        description: "Handle traffic spikes effortlessly without manual intervention."
    },
    {
        name: "Real-time collaboration",
        description: "Work together with your team in real-time, just like Google Docs for code."
    },
    {
        name: "Version control",
        description: "Full history of every change, allowing you to rollback instantly."
    },
    {
        name: "Custom domains",
        description: "Bring your own domain and we handle the SSL and routing."
    }
];

export default function FeatureImageSide() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Workflow</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                                A better way to work
                            </p>
                            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                Stop wasting time on configuration. Focus on what you do best: building amazing products.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-neutral-900 dark:text-white">
                                            <BiCheckCircle className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-last">
                        <div className="relative rounded-xl bg-neutral-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2669&ixlib=rb-4.0.3"
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
