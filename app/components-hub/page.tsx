import React from 'react'
import { foundationalComponents } from '@/ShowOnUi/foundational'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'
import { modalComponent } from '@/ShowOnUi/modalComponent'
import { responsiveSidebarComponents } from '@/ShowOnUi/responsiveSidebarComponents'
import HubLayout from './HubLayout'
import { getComponentDoc } from '@/lib/component-docs'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

import MDXCodeBlock from '@/components/MDXCodeBlock'
import { MDXTable, MDXThead, MDXTr, MDXTh, MDXTd } from '@/components/MDXTable'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-6 mb-3 text-neutral-900 dark:text-white" {...props} />,
  p: (props: any) => <p className="leading-7 text-neutral-600 dark:text-neutral-400 mb-4" {...props} />,
  pre: (props: any) => {
    // Pass children directly to MDXCodeBlock. 
    // MDX puts the 'code' element inside 'pre'.
    // We extract the code content string from the 'code' child if possible.
    const codeChild = React.Children.toArray(props.children)[0] as React.ReactElement;
    const code = (codeChild?.props as any)?.children;
    return <MDXCodeBlock>{code}</MDXCodeBlock>
  },
  table: MDXTable,
  thead: MDXThead,
  tr: MDXTr,
  th: MDXTh,
  td: MDXTd,
}

async function getDocsForComponent(id: string) {
  const doc = getComponentDoc(id)
  if (!doc) return undefined

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    },
    components: components,
  })
  return content
}

export default async function ComponentsHub({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: categoryParam } = await searchParams
  const category = categoryParam || 'Heading'

  let baseList: any[] = []

  // Check if category matches a foundational component name
  const foundComponent = foundationalComponents.find(c => c.name === category)

  if (foundComponent) {
    baseList = [foundComponent]
  } else if (category === 'Foundational') {
    // Keep backward compatibility just in case
    baseList = foundationalComponents
  } else if (category === 'Buttons') {
    baseList = buttonComponents
  } else if (category === 'Cards') {
    baseList = cardsComponents
  } else if (category === 'Modal') {
    baseList = modalComponent
  } else if (category === 'Sidebar') {
    baseList = responsiveSidebarComponents
  }

  // Augment list with MDX docs
  const activeList = await Promise.all(
    baseList.map(async (comp) => ({
      ...comp,
      docs: await getDocsForComponent(comp.id)
    }))
  )

  return (
    <HubLayout category={category} components={activeList} />
  )
}
