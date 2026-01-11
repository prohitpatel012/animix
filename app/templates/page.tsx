import Link from "next/link"

type TemplateType = "free" | "paid"

interface Template {
  id: number
  slug: string
  title: string
  description: string
  image: string
  type: TemplateType
  liveDemoUrl?: string
}

const templates: Template[] = [
  {
    id: 1,
    slug: "ecommerce-store",
    title: "Ecommerce Store",
    description:
      "A modern ecommerce experience with cart, checkout, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    type: "free",
    liveDemoUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "Enterprise-grade analytics dashboard with charts and real-time insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    type: "paid",
    liveDemoUrl: "https://admin-demo.vercel.app",
  },
]

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] px-6 py-16">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-14 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Templates
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Production-ready templates designed with performance, scalability,
            and clean UI in mind.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <article
              key={template.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${
                    template.type === "free"
                      ? "bg-green-100/90 text-green-800"
                      : "bg-red-100/90 text-red-800"
                  }`}
                >
                  {template.type === "free" ? "Free" : "Paid"}
                </span>
              </div>

              {/* Content */}
              <div className="flex h-full flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {template.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                  {template.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/templates/${template.slug}`}
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-800 transition hover:bg-gray-100"
                  >
                    View details
                  </Link>

                  {template.liveDemoUrl && (
                    <a
                      href={template.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-md bg-[#2563eb] px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-[#1e4fd8]"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
