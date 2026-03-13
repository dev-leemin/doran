import type { Metadata } from 'next'
import { getTest, getResult } from '@/lib/tests'

export async function generateMetadata(
  { params }: { params: Promise<{ testId: string; type: string }> }
): Promise<Metadata> {
  const { testId, type } = await params
  const test = getTest(testId)
  const result = getResult(testId, type)
  if (!test || !result) return {}

  const title = `${result.title} | ${test.title} | 도란도란`
  const description = `${result.description.slice(0, 100)}...`
  const image = `/icons/results/${testId}-${type}.png`

  return {
    title,
    description,
    alternates: {
      canonical: `/result/${testId}/${type}`,
    },
    openGraph: {
      title,
      description,
      images: [image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default async function ResultLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ testId: string; type: string }>
}) {
  const { testId, type } = await params
  const test = getTest(testId)
  const result = getResult(testId, type)

  return (
    <>
      {test && result && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": `${result.title} - ${test.title}`,
              "description": result.description,
              "url": `https://doran-orcin.vercel.app/result/${testId}/${type}`,
              "inLanguage": "ko",
              "isPartOf": {
                "@type": "Quiz",
                "name": test.title,
                "url": `https://doran-orcin.vercel.app/quiz/${testId}`
              },
              "provider": {
                "@type": "Organization",
                "name": "도란도란",
                "url": "https://doran-orcin.vercel.app"
              }
            })
          }}
        />
      )}
      {children}
    </>
  )
}
