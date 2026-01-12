import { getCategories } from '@/lib/templates'
import { Sidebar } from '@/components/templates/Sidebar'

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const categories = getCategories()

    return (
        <div className="flex min-h-screen bg-white dark:bg-black">
            <Sidebar categories={categories} />
            <main className="flex-1 min-w-0">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
