/*
  Warnings:

  - Added the required column `carga` to the `Bug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bug" ADD COLUMN     "carga" TEXT NOT NULL;
