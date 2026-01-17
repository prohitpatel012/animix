"use client";

const logos = [
    'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
];

export default function LogosCards() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-neutral-900 dark:text-white mb-10">
                    Integrates with your favorite tools
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {logos.map((src, idx) => (
                        <div key={idx} className="bg-white dark:bg-neutral-950 p-6 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800 flex items-center justify-center hover:shadow-md transition-shadow">
                            <img src={src} alt="Brand" className="max-h-8 w-auto dark:invert" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
