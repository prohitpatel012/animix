"use client";

const steps = [
    {
        name: "Create account",
        description: "Sign up and verify your identity in less than 2 minutes.",
        status: "current"
    },
    {
        name: "Link bank",
        description: "Securely connect your bank account using Plaid integration.",
        status: "upcoming"
    },
    {
        name: "Start saving",
        description: "Set your goals and let our AI optimize your savings automatically.",
        status: "upcoming"
    }
];

export default function FeatureListNumbered() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">How it works</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Get started in three simple steps.</p>
                </div>
                <div className="mx-auto max-w-2xl">
                    <ol className="overflow-hidden">
                        {steps.map((step, stepIdx) => (
                            <li key={step.name} className={`relative pb-10 ${stepIdx === steps.length - 1 ? '' : ''}`}>
                                {stepIdx !== steps.length - 1 ? (
                                    <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
                                ) : null}
                                <div className="group relative flex items-start">
                                    <span className="flex h-9 items-center">
                                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:bg-neutral-950">
                                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                        </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                        <span className="text-xl font-bold text-neutral-900 dark:text-white">{step.name}</span>
                                        <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">{step.description}</span>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
