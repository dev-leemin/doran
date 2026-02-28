/**
 * Prisma 클라이언트 싱글톤 (Neon Serverless Driver)
 *
 * @neondatabase/serverless + @prisma/adapter-neon 조합으로
 * TCP 대신 WebSocket을 사용해 Neon 콜드 스타트를 최소화한다.
 */
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
