/*
  Warnings:

  - You are about to drop the column `createdBy` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `replies` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `replies` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfLikes` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfReplies` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `followings` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `fullName` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_followerId_fkey";

-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_followingId_fkey";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "createdBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "replies" DROP COLUMN "createdBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "createdBy",
DROP COLUMN "numberOfLikes",
DROP COLUMN "numberOfReplies",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdBy",
DROP COLUMN "updatedBy",
ALTER COLUMN "fullName" SET NOT NULL,
ALTER COLUMN "username" SET NOT NULL;

-- DropTable
DROP TABLE "followings";

-- CreateTable
CREATE TABLE "follows" (
    "id" SERIAL NOT NULL,
    "followedId" INTEGER,
    "followerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follows_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
