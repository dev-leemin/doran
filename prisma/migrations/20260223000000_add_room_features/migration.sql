-- AlterTable: Room에 name, locked 컬럼 추가
ALTER TABLE "Room" ADD COLUMN IF NOT EXISTS "name" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Room" ADD COLUMN IF NOT EXISTS "locked" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable: RoomReaction
CREATE TABLE IF NOT EXISTS "RoomReaction" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "fromNick" TEXT NOT NULL,
    "toNick" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RoomReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable: ResultTypeStat
CREATE TABLE IF NOT EXISTS "ResultTypeStat" (
    "id" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "resultType" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResultTypeStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "RoomReaction_roomId_fromNick_toNick_type_key" ON "RoomReaction"("roomId", "fromNick", "toNick", "type");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "RoomReaction_roomId_idx" ON "RoomReaction"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "ResultTypeStat_testId_resultType_key" ON "ResultTypeStat"("testId", "resultType");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ResultTypeStat_testId_idx" ON "ResultTypeStat"("testId");

-- AddForeignKey
ALTER TABLE "RoomReaction" ADD CONSTRAINT "RoomReaction_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
