import { Resolver } from 'types';
import prisma from 'config/prisma';

const usuarioResolvers: Resolver = {
  Usuario: {
    proyectos: async (parent, args) =>{
      return await prisma.proyecto.findMany({
        where: {
          usuarios: {
            some: {
              id: parent.id
            }
          }
        },
      });
    },
    comentarios: async (parent, args) =>{ 
      return await prisma.comentario.findMany({
        where: {
          usuarioId: parent.id
        },
      });
    },
    bugs: async (parent, args) =>{
      return await prisma.bug.findMany({
        where: {
          usuarioId: parent.id
        },
      });
    },
    respuestas: async (parent, args) =>{
      return await prisma.respuesta.findMany({
        where: {
          usuarioId: parent.id
        },
      });
    },
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
    setUsuario: async (parent, args) =>
      await prisma.usuario.create({
        data: {
          identificacion: args.data.identificacion,
          nombre: args.data.nombre,
          email: args.data.email,
          role: 'Cliente',
        },
      }),
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
