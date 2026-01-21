import { getTemplate } from '@/lib/templates'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import Link from 'next/link'
import ModernLandingPage, { Navbar, Hero, Features, CTA, Footer } from '@/components/templates/ModernLandingPage'
import DashboardTemplate, { DashboardSidebar, DashboardHeader, DashboardStats, DashboardActivity, DashboardChart } from '@/components/templates/DashboardTemplate'
import * as Headers from '@/components/ui-component/headers'
import * as Sidebars from '@/components/ui-component/sidebars'

import * as Faqs from '@/components/ui-component/faq'
import * as Announcements from '@/components/ui-component/announcement'
import * as FeatureComponents from '@/components/ui-component/feature'
import * as FeatureListComponents from '@/components/ui-component/feature-list'
import * as BenefitComponents from '@/components/ui-component/benefits'
import * as LogoComponents from '@/components/ui-component/logos'
import * as PricingComponents from '@/components/ui-component/pricing-calculator'
import * as StatsComponents from '@/components/ui-component/stats'
import * as CaseStudyComponents from '@/components/ui-component/case-study'
import * as VideoComponents from '@/components/ui-component/video'
import * as GalleryComponents from '@/components/ui-component/gallery'
import * as AccordionComponents from '@/components/ui-component/accordion'
import * as TabsComponents from '@/components/ui-component/tabs'
import * as ContentSplitComponents from '@/components/ui-component/content-split'
import * as NavigationComponents from '@/components/ui-component/navigation'
import * as BreadcrumbComponents from '@/components/ui-component/breadcrumbs'
import * as FooterComponents from '@/components/ui-component/footer'
import * as ColorComponents from '@/components/ui-component/colors'

import * as Heroes from '@/components/ui-component/heroes'
import * as Pricing from '@/components/ui-component/pricing'
import * as Testimonials from '@/components/ui-component/testimonials'
import * as About from '@/components/ui-component/about'
import * as Contact from '@/components/ui-component/contact'

import * as AuthenticationComponents from '@/components/ui-component/authentication'
import * as DashboardSections from '@/components/ui-component/dashboard-sections'

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
          ...Sidebars,
          ...Heroes,
          ...Pricing,
          ...Testimonials,
          ...About,
          ...Faqs,
          ...Announcements,
          ...FeatureComponents,
          ...FeatureListComponents,
          ...BenefitComponents,
          ...LogoComponents,
          ...PricingComponents,
          ...StatsComponents,
          ...CaseStudyComponents,
          ...VideoComponents,
          ...GalleryComponents,
          ...AccordionComponents,
          ...TabsComponents,
          ...ContentSplitComponents,
          ...NavigationComponents,
          ...BreadcrumbComponents,
          ...FooterComponents,
          ...ColorComponents,
          ...AuthenticationComponents,
          ...DashboardSections,
          ...Contact
        }} />
      </div>
    </article>
  )
}