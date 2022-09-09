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
    respuestas: async (parent, args) => {
      const respuestas = await prisma.respuesta.findMany({
        where: {
          comentarioId: parent.id,
        },
      });
      return respuestas;
    },
  },
  Query: {
    obtenerComentarios: async (parent, args) => {
      const comentarios = await prisma.comentario.findMany();
      return comentarios;
    },
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
          textoComentario: args.data.textoComentario,
          Bug: {
            connect: {
              id: args.data.bugId,
            },
          },
          Usuario: {
            connect: {
              email: args.data.emailAuthor,
            },
          },
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
