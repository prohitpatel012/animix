"use client";

export default function FooterLegal() {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div className="font-bold text-neutral-900 dark:text-white text-lg">LegalCorp</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About Us</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    <p>
                        Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
                    </p>
                    <p>
                        Information on this website may not constitute the most up-to-date legal or other information. This website contains links to other third-party websites. Such links are only for the convenience of the reader, user or browser; the ABA and its members do not recommend or endorse the contents of the third-party sites.
                    </p>
                </div>
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between gap-4">
                    <p>&copy; 2024 LegalCorp LLC.</p>
                    <div className="flex gap-4">
                        <a href="#" className="underline">Privacy Policy</a>
                        <a href="#" className="underline">Terms of Use</a>
                        <a href="#" className="underline">Cookie Policy</a>
                        <a href="#" className="underline">Accessibility Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
