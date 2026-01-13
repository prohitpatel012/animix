import Link from 'next/link'
import { getAllTemplates } from '@/lib/templates'

export const dynamic = 'force-dynamic'

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const allTemplates = getAllTemplates()

  const filteredTemplates = category
    ? allTemplates.filter(t => t.category === category)
    : allTemplates

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {category ? `${category} Templates` : 'All Templates'}
        </h1>
        <p className="mt-2 text-neutral-500">
          Browse our collection of production-ready templates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Link
            key={template.slug}
            href={`/templates/${template.slug}`}
            className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <div className="aspect-video w-full rounded-lg bg-neutral-100 dark:bg-neutral-900 mb-4 flex items-center justify-center text-neutral-400">
              {/* Placeholder for preview image */}
              <span className="text-sm">Preview</span>
            </div>

            <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {template.title}
            </h3>

            <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
              {template.description}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
                {template.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-20 text-neutral-500">
          No templates found in this category.
        </div>
      )}
    </div>
  )
}
