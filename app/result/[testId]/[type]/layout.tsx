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

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return children
}
