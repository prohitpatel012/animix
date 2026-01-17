"use client";

const logos = [
    { name: 'Transistor', src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg' },
    { name: 'Reform', src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg' },
    { name: 'Tuple', src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg' },
    { name: 'SavvyCal', src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg' },
    { name: 'Statamic', src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg' },
];

export default function LogosAnimated() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-neutral-900 dark:text-white mb-10">
                    Our Ecosystem
                </h2>
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo, index) => (
                        <img
                            key={logo.name}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                            src={logo.src}
                            alt={logo.name}
                            width={158}
                            height={48}
                        />
                    ))}
                </div>
                <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out;
            }
          `}</style>
            </div>
        </div>
    );
}
