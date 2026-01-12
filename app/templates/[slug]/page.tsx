import { getTemplate } from '@/lib/templates'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const template = getTemplate(slug)

  if (!template) {
    return {}
  }

  return {
    title: `${template.title} - Templates`,
    description: template.description,
  }
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const template = getTemplate(slug)

  if (!template) {
    return notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/templates"
          className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 mb-4 inline-block"
        >
          ← Back to templates
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
            {template.category}
          </span>
          <span className="text-sm text-neutral-500">
            {new Date(template.date || '').toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          {template.description}
        </p>
      </div>

      {/* Preview Section could go here */}
      <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-xl mb-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
        <p className="text-neutral-400">Live Preview Component</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-6">Implementation Guide</h2>
        <MDXRemote source={template.content} components={mdxComponents} />
      </div>
    </article>
  )
}