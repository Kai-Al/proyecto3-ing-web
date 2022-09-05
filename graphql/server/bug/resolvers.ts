import { Resolver } from 'types';
import prisma from 'config/prisma';

const bugResolvers: Resolver = {
  Bug: {
    proyecto: async (parent) => {
      return await prisma.bug.findUnique({
        where: {
          id: parent.id,
        },
      }).proyecto();
    },
    usuario: async (parent) => {
      return await prisma.bug.findUnique({
        where: {
          id: parent.id,
        },
      }).usuario();
    },
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
              email: "NULL"
            }
          },
          proyecto: {
            connect: {
              nombre: args.data.nameProyecto,
            },
          },
          carga: '',
          
        },
      }),
    updateBugCliente: async (parent, args) => {
      const bug = await prisma.bug.update({
        where: {
          id: args.data.id,
        },
        data: {
          ...args.data
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
