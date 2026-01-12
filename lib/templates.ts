import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const TEMPLATES_DIR = path.join(process.cwd(), 'content/templates')

export type Template = {
    slug: string
    title: string
    description: string
    category: string
    date?: string
    content: string
    meta?: any
}

export function getAllTemplates(): Template[] {
    if (!fs.existsSync(TEMPLATES_DIR)) {
        return []
    }

    const files = fs.readdirSync(TEMPLATES_DIR)

    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, '')
            const filePath = path.join(TEMPLATES_DIR, file)
            const source = fs.readFileSync(filePath, 'utf8')
            const { data, content } = matter(source)

            return {
                slug,
                title: data.title ?? slug,
                description: data.description ?? '',
                category: data.category ?? 'Uncategorized',
                date: data.date,
                content,
                meta: data,
            }
        })
        .sort((a, b) => { // Sort by date desc
            if (!a.date || !b.date) return 0
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
}

export function getTemplate(slug: string): Template | null {
    try {
        const filePath = path.join(TEMPLATES_DIR, `${slug}.mdx`)
        if (!fs.existsSync(filePath)) return null

        const source = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(source)

        return {
            slug,
            title: data.title ?? slug,
            description: data.description ?? '',
            category: data.category ?? 'Uncategorized',
            date: data.date,
            content,
            meta: data,
        }
    } catch {
        return null
    }
}

export function getCategories(): string[] {
    const templates = getAllTemplates();
    const categories = new Set(templates.map(t => t.category));
    return Array.from(categories).sort();
}
