"use client";

const features = [
    {
        title: "Push to deploy",
        description: "Completely automated CI/CD pipeline integrated directly into your workflow.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3"
    },
    {
        title: "SSL Certificates",
        description: "Automatically provisioned and renewed SSL certificates for all your domains.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
        title: "Database Backups",
        description: "Point-in-time recovery for your database, stored securely off-site.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    }
];

export default function FeatureListAlternating() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Platform Capabilities</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Designed for scale and reliability.</p>
                </div>
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={feature.title} className={`flex flex-col gap-16 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center`}>
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 shadow-lg ring-1 ring-neutral-900/10 dark:ring-white/10">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="h-full w-full object-cover object-center transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">{feature.title}</h3>
                                <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
