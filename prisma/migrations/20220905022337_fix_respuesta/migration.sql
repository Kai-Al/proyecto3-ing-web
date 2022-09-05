/*
  Warnings:

  - Added the required column `carga` to the `Bug` table without a default value. This is not possible if the table is not empty.
  - Made the column `comentarioId` on table `Respuesta` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_comentarioId_fkey";

-- AlterTable
ALTER TABLE "Bug" ADD COLUMN     "carga" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Respuesta" ALTER COLUMN "comentarioId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_comentarioId_fkey" FOREIGN KEY ("comentarioId") REFERENCES "Comentario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
