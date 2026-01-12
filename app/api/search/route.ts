import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/mdx'
import { getAllTemplates } from '@/lib/templates'

export async function GET() {
    const posts = getAllPosts()
    const templates = getAllTemplates()

    const results = [
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
