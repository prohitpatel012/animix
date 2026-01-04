import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'app/blog')

export type BlogPost = {
    slug: string
    title: string
    description: string
}

export function getAllPosts(): BlogPost[] {
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })

    return entries
        .filter(
            (dir) =>
                dir.isDirectory() &&
                !dir.name.startsWith('[') // ⬅ ignore [slug]
        )
        .map((dir) => {
            const slug = dir.name
            const mdxPath = path.join(BLOG_DIR, slug, 'page.mdx')

            if (!fs.existsSync(mdxPath)) return null

            const file = fs.readFileSync(mdxPath, 'utf-8')

            const titleMatch = file.match(/title:\s*['"](.*)['"]/)
            const descMatch = file.match(/description:\s*['"](.*)['"]/)

            return {
                slug,
                title: titleMatch?.[1] ?? slug,
                description: descMatch?.[1] ?? '',
            }
        })
        .filter(Boolean) as BlogPost[]
}
