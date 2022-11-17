import { Resolver } from 'types';
import prisma from 'config/prisma';

const usuarioResolvers: Resolver = {
  Usuario: {
    proyectos: async (parent, args) =>
      await prisma.proyecto.findMany({
        where: {
          usuarios: {
            some: {
              id: parent.id,
            },
          },
        },
      }),
    comentarios: async (parent, args) =>
      await prisma.comentario.findMany({
        where: {
          usuarioId: parent.id,
        },
      }),
    bugs: async (parent, args) =>
      await prisma.bug.findMany({
        where: {
          usuarioId: parent.id,
        },
      }),
    respuestas: async (parent, args) =>
      await prisma.respuesta.findMany({
        where: {
          usuarioId: parent.id,
        },
      }),
  },
  Query: {
    obtenerUsuarios: async (parent, args) => {
      const usuario = await prisma.usuario.findMany();
      return usuario;
    },
    obtenerUsuario: async (parent, args) =>
      await prisma.usuario.findUnique({
        where: {
          email: args.email,
        },
      }),
  },
  Mutation: {
    updateUsuario: async (parent, args) => {
      const usuario = await prisma.usuario.update({
        where: {
          email: args.emailOriginal,
        },
        data: {
          ...args.data,
        },
      });
      return usuario;
    },
    deleteUsuario: async (parent, args) =>
      await prisma.usuario.delete({
        where: {
          email: args.email,
        },
      }),
  },
};

export { usuarioResolvers };
