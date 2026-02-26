import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import SessionProvider from "@/components/session-provider";
import HeaderAuth from "@/components/header-auth";
import HeaderMenu from "@/components/header-menu";
import HeaderSearch from "@/components/header-search";
import BackButton from "@/components/back-button";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://doran-orcin.vercel.app"),
  title: "도란도란, 서로를 알아가는 테스트",
  description: "회사 캐릭터, 점심 매칭, 취향 궁합까지. 혼자도 좋고 같이하면 더 좋은 테스트 모음",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "도란도란",
    description: "서로를 알아가는 재미있는 테스트 모음. 결과를 공유하고 친구와 궁합을 비교해보세요!",
    images: ["/logo.png"],
    type: "website",
    siteName: "도란도란",
  },
  twitter: {
    card: "summary",
    title: "도란도란, 서로를 알아가는 테스트",
    description: "회사 캐릭터, 점심 매칭, 취향 궁합까지",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
        />
      </head>
      <body className="antialiased min-h-dvh">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2632103940068646"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('contextmenu',function(e){e.preventDefault()});document.addEventListener('dragstart',function(e){e.preventDefault()});try{if(localStorage.getItem('doran_theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}` }} />
        <SessionProvider>
          {/* 배경 데코 */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.07]"
              style={{ background: 'radial-gradient(circle, var(--sky-400), transparent 70%)' }}
            />
            <div
              className="absolute top-1/2 -left-48 w-80 h-80 rounded-full opacity-[0.05]"
              style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
            />
            <div
              className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, var(--sky-300), transparent 70%)' }}
            />
          </div>

          {/* 헤더 */}
          <header className="sticky top-0 z-50 glass">
            <div className="max-w-3xl mx-auto grid grid-cols-3 items-center px-5 h-14">
              {/* 왼쪽: 뒤로가기 + 햄버거 메뉴 */}
              <div className="flex justify-start gap-0.5">
                <BackButton />
                <HeaderMenu />
              </div>
              {/* 가운데: 로고 */}
              <Link href="/" className="flex items-center justify-center gap-1">
                <img src="/logo.png" alt="도란" className="w-10 h-10" />
                <span className="text-2xl font-bold gradient-text font-logo">도란</span>
              </Link>
              {/* 오른쪽: 검색 + 유저 아이콘 */}
              <div className="flex justify-end gap-1">
                <ThemeToggle />
                <HeaderSearch />
                <HeaderAuth />
              </div>
            </div>
          </header>

          <main className="max-w-3xl mx-auto px-5 pb-20">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="border-t py-6 mt-8" style={{ borderColor: 'var(--border)' }}>
            <div className="max-w-3xl mx-auto px-5 flex items-center justify-between">
              <span className="text-[11px]" style={{ color: 'var(--muted)' }}>
                &copy; 2026 도란도란
              </span>
              <a
                href="/privacy"
                className="text-[11px] hover:underline"
                style={{ color: 'var(--muted)' }}
              >
                개인정보처리방침
              </a>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
