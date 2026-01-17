"use client";

export default function FooterMinimal() {
    return (
        <footer className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-3xl px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-bold text-lg tracking-tighter">min.</span>
                <p className="text-sm text-neutral-500">
                    &copy; {new Date().getFullYear()} Minimalist.
                </p>
                <a href="mailto:hello@example.com" className="text-sm font-medium hover:text-indigo-600">hello@example.com</a>
            </div>
        </footer>
    )
}
