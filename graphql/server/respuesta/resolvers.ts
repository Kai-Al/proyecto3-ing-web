import prisma from '@config/prisma';
import { Resolver } from 'types';

const RespuestaResolvers: Resolver = {
  Respuesta: {
    Usuario: async (parent, args) => {
      const usuario = await prisma.user.findUnique({
        where: {
          id: parent.usuarioId,
        },
      });
      return usuario;
    },
    Comentario: async (parent, args) => {
      const comentario = await prisma.comentario.findUnique({
        where: {
          id: parent.comentarioId,
        },
      });
      return comentario;
    },
  },
  Query: {
    obtenerRespuesta: async (parent, args) => {
      const respuesta = await prisma.respuesta.findUnique({
        where: {
          id: args.id,
        },
      });
      return respuesta;
    },
  },
  Mutation: {
    crearRespuesta: async (parent, args) => {
      const newRespuesta = await prisma.respuesta.create({
        data: {
          id: args.data.id,
          textoRespuesta: args.data.textoRespuesta,
          Comentario: {
            connect: {
              id: args.data.comentarioId,
            },
          },
          Usuario: {
            connect: {
              email: args.data.emailAuthor,
            },
          },
        },
      });
      return newRespuesta;
    },
    actualizarRespuesta: async (parent, args) => {
      const updateRespuesta = await prisma.respuesta.update({
        where: {
          id: args.data.id,
        },
        data: {
          id: args.data.id,
          textoRespuesta: args.data.textoRespuesta,
          comentarioId: args.data.comentarioId,
          usuarioId: args.data.usuarioId,
        },
      });
      return updateRespuesta;
    },
    eliminarRespuesta: async (parent, args) => {
      const eliminarRespuesta = await prisma.respuesta.delete({
        where: {
          id: args.id,
        },
      });
      return eliminarRespuesta;
    },
  },
};

export { RespuestaResolvers };
