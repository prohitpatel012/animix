import { getTemplate } from '@/lib/templates'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import Link from 'next/link'
import ModernLandingPage, { Navbar, Hero, Features, CTA, Footer } from '@/components/templates/ModernLandingPage'
import DashboardTemplate, { DashboardSidebar, DashboardHeader, DashboardStats, DashboardActivity, DashboardChart } from '@/components/templates/DashboardTemplate'
import * as Headers from '@/components/ui-component/headers'
import * as Sidebars from '@/components/ui-component/sidebars'

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

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={template.content} components={{
          ...mdxComponents,
          ModernLandingPage, Navbar, Hero, Features, CTA, Footer,
          DashboardTemplate, DashboardSidebar, DashboardHeader, DashboardStats, DashboardActivity, DashboardChart,
          ...Headers,
          ...Sidebars
        }} />
      </div>
    </article>
  )
}