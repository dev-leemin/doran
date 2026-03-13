import { testList } from '@/lib/tests'
import HomeClient from './home-client'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "도란도란 심리테스트 모음",
    "description": "직장인 유형, 연애 스타일, 음식 성격, 동물 MBTI까지! 다양한 무료 심리테스트",
    "numberOfItems": testList.length,
    "itemListElement": testList.map((test, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://doran-orcin.vercel.app/quiz/${test.id}`,
      "name": test.title,
      "description": test.description,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}
