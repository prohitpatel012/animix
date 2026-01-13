import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/mdx'
import { getAllTemplates } from '@/lib/templates'
import { getAllComponents } from '@/lib/component-docs'

export async function GET() {
    const posts = getAllPosts()
    const templates = getAllTemplates()
    const components = getAllComponents()

    const results = [
        ...components.map((component) => ({
            type: 'Component',
            name: component.title,
            url: `/components-hub?category=${component.title}`,
            description: component.description
        })),
        ...posts.map((post) => ({
            type: 'Blog',
            name: post.title,
            url: `/blog/${post.slug}`,
            description: post.description
        })),
        ...templates.map((template) => ({
            type: 'Template',
            name: template.title,
            url: `/templates/${template.slug}`,
            description: template.description
        }))
    ]

    return NextResponse.json(results)
}
