/*
  Warnings:

  - Made the column `followedId` on table `follows` required. This step will fail if there are existing NULL values in that column.
  - Made the column `followerId` on table `follows` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_followedId_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_followerId_fkey";

-- AlterTable
ALTER TABLE "follows" ALTER COLUMN "followedId" SET NOT NULL,
ALTER COLUMN "followerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
