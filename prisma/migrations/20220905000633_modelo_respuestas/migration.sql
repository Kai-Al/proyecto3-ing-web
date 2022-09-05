/*
  Warnings:

  - You are about to drop the column `comentarioId` on the `Comentario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_comentarioId_fkey";

-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "comentarioId";

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" TEXT NOT NULL,
    "textoRespuesta" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "comentarioId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_comentarioId_fkey" FOREIGN KEY ("comentarioId") REFERENCES "Comentario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
