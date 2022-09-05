import { Resolver } from 'types';
import prisma from 'config/prisma';

const bugResolvers: Resolver = {
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
              email: args.data.authorEmail,
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
          id: args.id,
        },
        data: {
          prioridad: args.prioridad,
          estado: args.estado,
          descripcion: args.descripcion,
          usuarioId: args.usuarioId,
          proyectoId: args.proyectoId,
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
