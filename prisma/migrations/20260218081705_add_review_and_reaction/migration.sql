-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestReaction" (
    "id" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestReaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_testId_idx" ON "Review"("testId");

-- CreateIndex
CREATE INDEX "TestReaction_testId_idx" ON "TestReaction"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "TestReaction_testId_sessionId_type_key" ON "TestReaction"("testId", "sessionId", "type");
