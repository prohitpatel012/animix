"use client";

const steps = [
    {
        title: "Onboarding",
        description: "We guide you through the setup process personally.",
        date: "Day 1"
    },
    {
        title: "Integration",
        description: "Seamlessly connect your existing data and tools.",
        date: "Day 2-3"
    },
    {
        title: "Launch",
        description: "Go live with confidence and start seeing results.",
        date: "Day 7"
    }
];

export default function BenefitTimeline() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Success Roadmap</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Our proven path to value.</p>
                </div>
                <div className="mx-auto max-w-3xl">
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
                        {steps.map((step) => (
                            <div key={step.title} className="relative pl-8 md:pl-12">
                                <span className="absolute -left-[5px] top-1 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-neutral-900" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{step.title}</h3>
                                    <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{step.date}</span>
                                </div>
                                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-lg">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
