


import { getAllTemplates } from '@/lib/templates'
import TemplateGallery from '@/components/templates/TemplateGallery'
import { authenticationCategories } from '@/ShowOnUi/authenticationComponents'
import { navigationCategories } from '@/ShowOnUi/navigationComponents'
import { tabsComponents, tabsCategories } from '@/ShowOnUi/tabsComponents'
import { userProfileCategories } from '@/ShowOnUi/userProfileComponents'
import { colorsCategories } from '@/ShowOnUi/colorsComponents'
import { heroCategories } from '@/ShowOnUi/heroComponents'
import { landingPageCategories } from '@/ShowOnUi/landingPageComponents'

import SubcategoryGrid from '@/components/SubcategoryGrid'
import MainComponentArea from '@/components/MainComponentArea'
import { getComponentDoc } from '@/lib/component-docs'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import React from 'react'

// Reuse MDX components from components-hub
import MDXCodeBlock from '@/components/MDXCodeBlock'
import { MDXTable, MDXThead, MDXTr, MDXTh, MDXTd } from '@/components/MDXTable'

const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-6 mb-3 text-neutral-900 dark:text-white" {...props} />,
  p: (props: any) => <p className="leading-7 text-neutral-600 dark:text-neutral-400 mb-4" {...props} />,
  pre: (props: any) => {
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
      mdxOptions: { remarkPlugins: [remarkGfm] }
    },
    components: mdxComponents,
  })
  return content
}

export const dynamic = 'force-dynamic'

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string, subcategory?: string }>
}) {
  const { category, subcategory } = await searchParams
  const allTemplates = getAllTemplates()

  // --- Logic to handle Component Collections inside Templates ---

  let isComponentCollection = false;
  let componentList: any[] = [];
  let subcategoriesList: any[] = [];
  let isSubcategoryView = false;
  let collectionTitle = '';
  let collectionDescription = '';

  if (category === 'Authentication') {
    isComponentCollection = true;
    collectionTitle = 'Authentication Templates';
    collectionDescription = 'Complete authentication flows including login, signup, verification, and password management.';

    if (subcategory && typeof subcategory === 'string' && authenticationCategories[subcategory]) {
      componentList = authenticationCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${authenticationCategories[subcategory].title} Components`;
      collectionDescription = authenticationCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(authenticationCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));
    }
  } else if (category === 'Navigation') {
    isComponentCollection = true;
    collectionTitle = 'Navigation Templates';
    collectionDescription = 'Headers, sidebars, and menus for site navigation.';

    if (subcategory && typeof subcategory === 'string' && navigationCategories[subcategory]) {
      componentList = navigationCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${navigationCategories[subcategory].title} Components`;
      collectionDescription = navigationCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(navigationCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));


    }

  } else if (category === 'User Profile') {
    isComponentCollection = true;
    collectionTitle = 'User Profile & Settings';
    collectionDescription = 'Comprehensive components for user profiles, dashboards, and account management.';

    const profileData = userProfileCategories['User Profile'];

    if (profileData) {
      if (subcategory) {
        // Since User Profile components are a flat list, we treat each component as a subcategory
        const matchedComponent = profileData.components.find(c => c.name === subcategory);
        if (matchedComponent) {
          componentList = [matchedComponent];
          isSubcategoryView = true;
          collectionTitle = matchedComponent.name;
        }
      } else {
        subcategoriesList = profileData.components.map(comp => ({
          slug: comp.name,
          title: comp.name,
          description: '',
          count: 1
        }));
      }
    }

  } else if (category === 'Tabs') {
    isComponentCollection = true;
    collectionTitle = 'Tab Components';
    collectionDescription = 'Switch between different views or content panes.';

    if (subcategory && typeof subcategory === 'string' && tabsCategories[subcategory]) {
      componentList = tabsCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${tabsCategories[subcategory].title}`;
      collectionDescription = tabsCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(tabsCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));
    }
  } else if (category === 'Colors') {
    isComponentCollection = true;
    collectionTitle = 'Color Systems';
    collectionDescription = 'Palettes and combinations for your design system.';

    if (subcategory && typeof subcategory === 'string' && colorsCategories[subcategory]) {
      componentList = colorsCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${colorsCategories[subcategory].title}`;
      collectionDescription = colorsCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(colorsCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));
    }
  } else if (category === 'Hero Sections') {
    isComponentCollection = true;
    collectionTitle = 'Hero Sections';
    collectionDescription = 'Eye-catching top sections to introduce your page.';

    if (subcategory && typeof subcategory === 'string' && heroCategories[subcategory]) {
      componentList = heroCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${heroCategories[subcategory].title}`;
      collectionDescription = heroCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(heroCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));
    }
  } else if (category === 'Landing Pages') {
    isComponentCollection = true;
    collectionTitle = 'Landing Pages';
    collectionDescription = 'Full page templates ready for production.';

    if (subcategory && typeof subcategory === 'string' && landingPageCategories[subcategory]) {
      componentList = landingPageCategories[subcategory].components;
      isSubcategoryView = true;
      collectionTitle = `${landingPageCategories[subcategory].title}`;
      collectionDescription = landingPageCategories[subcategory].description;
    } else {
      subcategoriesList = Object.entries(landingPageCategories).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
        count: data.components.length
      }));
    }
  }

  // If showing components, augment with MDX docs
  if (isComponentCollection && isSubcategoryView && componentList.length > 0) {
    componentList = await Promise.all(
      componentList.map(async (comp) => ({
        ...comp,
        docs: await getDocsForComponent(comp.id)
      }))
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {isComponentCollection ? (
        <div className="space-y-12">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {collectionTitle}
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              {collectionDescription}
            </p>
          </div>

          {isSubcategoryView ? (
            <MainComponentArea
              components={componentList}
            />
          ) : (
            <SubcategoryGrid items={subcategoriesList} parentCategory={category!} basePath="/templates" />
          )}
        </div>
      ) : (
        <TemplateGallery templates={allTemplates} />
      )}
    </div>
  )
}
