import { getAllTemplates } from '@/lib/templates'
import TemplateGallery from '@/components/templates/TemplateGallery'

export const dynamic = 'force-dynamic'

export default async function TemplatesPage() {
  const allTemplates = getAllTemplates()

  return (
    <div className="max-w-7xl mx-auto">
      <TemplateGallery templates={allTemplates} />
    </div>
  )
}
