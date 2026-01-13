import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const COMPONENTS_DIR = path.join(process.cwd(), 'content/components')

export type ComponentDoc = {
    slug: string
    title: string
    description: string
    content: string
}

export function getComponentDoc(slug: string): ComponentDoc | null {
    try {
        const filePath = path.join(COMPONENTS_DIR, `${slug}.mdx`)
        if (!fs.existsSync(filePath)) return null

        const source = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(source)

        return {
            slug,
            title: data.title ?? slug,
            description: data.description ?? '',
            content,
        }
    } catch {
        return null
    }
}
