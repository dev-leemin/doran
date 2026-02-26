/**
 * Prisma 클라이언트 싱글톤
 *
 * Next.js의 HMR(Hot Module Replacement) 환경에서
 * 매 리로드마다 새 커넥션이 생기는 걸 방지하기 위해
 * globalThis에 인스턴스를 캐싱한다.
 */
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
