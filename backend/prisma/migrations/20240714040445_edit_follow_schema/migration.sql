/*
  Warnings:

  - A unique constraint covering the columns `[followedId,followerId]` on the table `follows` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "follows_followedId_followerId_key" ON "follows"("followedId", "followerId");
