"use client";

const logos = [
    { name: 'Transistor', src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg' },
    { name: 'Reform', src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg' },
    { name: 'Tuple', src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg' },
    { name: 'SavvyCal', src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg' },
    { name: 'Statamic', src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg' },
];

export default function LogosHeading() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-12 mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Trusted by the world’s best
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Join 4,000+ companies who have already signed up
                    </p>
                </div>
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo) => (
                        <img
                            key={logo.name}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert opacity-80"
                            src={logo.src}
                            alt={logo.name}
                            width={158}
                            height={48}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
