import prisma from '@config/prisma';
import { Resolver } from 'types';

const ComentarioResolvers: Resolver = {
  Comentario: {
    usuario: async (parent, args) => {
      const usuario = await prisma.usuario.findUnique({
        where: {
          id: parent.usuarioId,
        },
      });
      return usuario;
    },
    bug: async (parent, args) => {
      const bug = await prisma.bug.findUnique({
        where: {
          id: parent.bugId,
        },
      });
      return bug;
    },
  },
  Query: {
    obtenerComentario: async (parent, args) => {
      const comentario = await prisma.comentario.findUnique({
        where: {
          id: args.id,
        },
      });
      return comentario;
    },
  },
  Mutation: {
    crearComentario: async (parent, args) => {
      const newComentario = await prisma.comentario.create({
        data: {
          id: args.data.id,
          textoComentario: args.data.textoComentario,
          bugId: args.data.bugId,
          usuarioId: args.data.usuarioId,
        },
      });
      return newComentario;
    },
    actualizarComentario: async (parent, args) => {
      const updateComentario = await prisma.comentario.update({
        where: {
          id: args.data.id,
        },
        data: {
          id: args.data.id,
          textoComentario: args.data.textoComentario,
          bugId: args.data.bugId,
          usuarioId: args.data.usuarioId,
        },
      });
      return updateComentario;
    },

    eliminarComentario: async (parent, args) => {
      const eliminarComentario = await prisma.comentario.delete({
        where: {
          id: args.id,
        },
      });
      return eliminarComentario;
    },
  },
};

export { ComentarioResolvers };
