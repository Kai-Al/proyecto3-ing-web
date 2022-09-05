/*
  Warnings:

  - You are about to drop the column `isFinal` on the `Bug` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bug" DROP COLUMN "isFinal",
ADD COLUMN     "isFinalizado" BOOLEAN NOT NULL DEFAULT false;
