import { Resolver } from 'types';
import prisma from 'config/prisma';

const bugResolvers: Resolver = {
  Bug: {
    proyecto: async (parent) =>
      await prisma.bug
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .proyecto(),
    usuario: async (parent) =>
      await prisma.bug
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .usuario(),
    comentarios: async (parent) =>
      await prisma.bug
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .comentarios(),
  },
  Query: {
    obtenerBugs: async (parent, args) => {
      const bug = await prisma.bug.findMany();
      return bug;
    },
    obtenerBug: async (parent, args) => {
      const bug = await prisma.bug.findUnique({
        where: {
          id: args.id,
        },
      });
      return bug;
    },
  },
  Mutation: {
    setBug: async (parent, args) =>
      await prisma.bug.create({
        data: {
          descripcion: args.data.descripcion,
          prioridad: args.data.prioridad,
          estado: 'NoIniciado',
          usuario: {
            connect: {
              email: 'NULL',
            },
          },
          proyecto: {
            connect: {
              nombre: args.data.nameProyecto,
            },
          },
        },
      }),
    updateBug: async (parent, args) => {
      const bug = await prisma.bug.update({
        where: {
          id: args.data.id,
        },
        data: {
          descripcion: args.data.descripcion,
          prioridad: args.data.prioridad,
          estado: args.data.estado,
          usuario: {
            connect: {
              email: args.data.usuario,
            },
          },
          carga: args.data.carga,
          isFinalizado: args.data.isFinalizado,
        },
      });
      return bug;
    },
    deleteBug: async (parent, args) => {
      const deleteBug = await prisma.bug.delete({
        where: {
          id: args.id,
        },
      });
      return deleteBug;
    },
  },
};

export { bugResolvers };
