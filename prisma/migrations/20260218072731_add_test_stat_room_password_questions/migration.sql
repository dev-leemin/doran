-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "password" VARCHAR(4) NOT NULL DEFAULT '0000',
ADD COLUMN     "questionCount" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "questionIds" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "TestStat" (
    "testId" TEXT NOT NULL,
    "playCount" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestStat_pkey" PRIMARY KEY ("testId")
);
