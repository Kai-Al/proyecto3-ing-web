/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProyectoToUsuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bug" DROP CONSTRAINT "Bug_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ProyectoToUsuario" DROP CONSTRAINT "_ProyectoToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProyectoToUsuario" DROP CONSTRAINT "_ProyectoToUsuario_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Enum_Role" NOT NULL DEFAULT 'Cliente',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "_ProyectoToUsuario";

-- CreateTable
CREATE TABLE "_ProyectoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProyectoToUser_AB_unique" ON "_ProyectoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProyectoToUser_B_index" ON "_ProyectoToUser"("B");

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUser" ADD CONSTRAINT "_ProyectoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUser" ADD CONSTRAINT "_ProyectoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
