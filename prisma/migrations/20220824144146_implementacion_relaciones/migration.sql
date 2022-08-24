/*
  Warnings:

  - Added the required column `proyectoId` to the `Bug` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Bug` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bugId` to the `Comentario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Comentario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bug" ADD COLUMN     "proyectoId" TEXT NOT NULL,
ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comentario" ADD COLUMN     "bugId" TEXT NOT NULL,
ADD COLUMN     "comentarioId" TEXT,
ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ProyectoToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProyectoToUsuario_AB_unique" ON "_ProyectoToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_ProyectoToUsuario_B_index" ON "_ProyectoToUsuario"("B");

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_bugId_fkey" FOREIGN KEY ("bugId") REFERENCES "Bug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_comentarioId_fkey" FOREIGN KEY ("comentarioId") REFERENCES "Comentario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUsuario" ADD CONSTRAINT "_ProyectoToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUsuario" ADD CONSTRAINT "_ProyectoToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
