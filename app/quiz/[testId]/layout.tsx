import type { Metadata } from 'next'
import { getTest } from '@/lib/tests'

export async function generateMetadata(
  { params }: { params: Promise<{ testId: string }> }
): Promise<Metadata> {
  const { testId } = await params
  const test = getTest(testId)
  if (!test) return {}

  const images = test.icon ? [test.icon] : []

  return {
    title: `${test.title} | 도란도란`,
    description: test.description,
    alternates: {
      canonical: `/quiz/${testId}`,
    },
    openGraph: {
      title: `${test.title} | 도란도란`,
      description: test.description,
      images,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${test.title} | 도란도란`,
      description: test.description,
      images,
    },
  }
}

export default async function TestLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ testId: string }>
}) {
  const { testId } = await params
  const test = getTest(testId)

  return (
    <>
      {test && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Quiz",
              "name": test.title,
              "description": test.description,
              "url": `https://doran-orcin.vercel.app/quiz/${testId}`,
              "inLanguage": "ko",
              "isAccessibleForFree": true,
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
