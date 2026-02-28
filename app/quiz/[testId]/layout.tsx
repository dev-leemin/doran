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

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return children
}
