/*
  Warnings:

  - You are about to drop the column `userName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "userName",
ADD COLUMN     "username" TEXT,
ALTER COLUMN "fullName" DROP NOT NULL;
