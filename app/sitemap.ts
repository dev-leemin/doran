import type { MetadataRoute } from 'next'
import { testList } from '@/lib/tests'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doran-orcin.vercel.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const testPages: MetadataRoute.Sitemap = testList.map(test => ({
    url: `${baseUrl}/quiz/${test.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const resultPages: MetadataRoute.Sitemap = testList.flatMap(test =>
    test.results.map(result => ({
      url: `${baseUrl}/result/${test.id}/${result.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...testPages, ...resultPages]
}
