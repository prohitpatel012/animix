"use client";

const logos = [
    'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg',
    'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
];

export default function LogosBordered() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-200 dark:border-neutral-800">
                    {logos.map((src, idx) => (
                        <div key={idx} className="flex justify-center items-center p-12 border-r border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                            <img src={src} alt="Brand config" className="max-h-8 dark:invert opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
