# 도란도란

> 서로를 알아가는 테스트 플랫폼

혼자도 좋고, 같이하면 더 좋은 성향 테스트 모음. 회사 캐릭터부터 점심 취향, 궁합 테스트까지 — 친구들과 결과를 비교하고 궁합을 확인해보세요.

## 테스트 목록

| 테스트 | 설명 | 문항 수 |
|--------|------|---------|
| 회사에서나는? | 직장에서의 나의 성향을 알아보는 테스트 | 최대 22문항 |
| 점심 뭐 먹지? | 나의 음식 취향과 식사 스타일 테스트 | 최대 22문항 |
| 취향 궁합 | 라이프스타일과 성향으로 보는 궁합 테스트 | 최대 22문항 |

## 주요 기능

- **성향 테스트**: 문항 수 선택 가능 (5~22문항), 상황별 선택지
- **방 시스템**: 방 만들기 → 친구 초대 → 동일 문항으로 테스트 → 결과 비교
- **궁합 분석**: 1:1 상세 궁합, 그룹 궁합 지수, 최고/최저 케미, 궁합 랭킹
- **성향 분포**: 참가자 유형 분포 차트, 전체 궁합표
- **방 관리**: 비밀번호 기반 관리 (방 이름 변경, 참가자 강퇴, 방 삭제)
- **공유**: 링크 복사, 네이티브 공유 API
- **소셜 로그인**: Google, Kakao 로그인 지원
- **리뷰**: 테스트 완료 후 리뷰 작성

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일**: Tailwind CSS 4
- **아이콘**: Lucide React
- **DB**: PostgreSQL + Prisma 6
- **인증**: NextAuth.js v5
- **배포**: Vercel + Neon PostgreSQL

## 로컬 개발

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env
# .env 파일에 DATABASE_URL, AUTH_SECRET 등 설정

# DB 마이그레이션
npx prisma migrate dev

# Prisma 클라이언트 생성
npx prisma generate

# 개발 서버 실행
npm run dev
```

## 환경변수

| 변수 | 설명 |
|------|------|
| `DATABASE_URL` | PostgreSQL 연결 URL |
| `AUTH_SECRET` | NextAuth 시크릿 키 |
| `AUTH_GOOGLE_ID` | Google OAuth 클라이언트 ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth 시크릿 |
| `AUTH_KAKAO_ID` | Kakao OAuth 앱 키 |
| `AUTH_KAKAO_SECRET` | Kakao OAuth 시크릿 |

## 프로젝트 구조

```
doran/
├── app/
│   ├── api/           # API 라우트 (room, reviews, stats 등)
│   ├── quiz/          # 테스트 플레이 페이지
│   ├── result/        # 결과 페이지
│   ├── room/          # 방 (그룹 결과) 페이지
│   └── page.tsx       # 홈
├── components/        # 공통 컴포넌트
├── lib/
│   ├── tests/         # 테스트 정의 (문항, 결과 유형)
│   ├── compatibility.ts  # 궁합 계산
│   ├── room-store.ts  # 방 CRUD (Prisma)
│   └── history.ts     # localStorage 히스토리
└── prisma/            # DB 스키마 & 마이그레이션
```
