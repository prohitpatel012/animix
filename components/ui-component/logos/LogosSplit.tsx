"use client";

const logos = [
    'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg',
];

export default function LogosSplit() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-16 items-center">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                            Used by the best teams
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                            We are proud to support thousands of companies on their mission to build better software.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Read our customer stories &rarr;</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-8">
                        {logos.map((src, i) => (
                            <div key={i} className="flex justify-center items-center bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm">
                                <img src={src} alt="Logo" className="max-h-8 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
