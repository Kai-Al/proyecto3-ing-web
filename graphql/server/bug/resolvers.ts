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
    setBug: async (parent, args) => {
      const bug = await prisma.bug.create({
        data: {
          prioridad: args.data.prioridad,
          estado: args.data.estado,
          descripcion: args.data.descripcion,
          // Usuario: args.data.Usuario,
          usuarioId: args.data.usuarioId,
          proyectoId: args.data.proyectoId,
          Proyecto: args.data.Proyecto,
        },
      });
      return bug;
    },
    updateBug: async (parent, args) => {
      const bug = await prisma.bug.update({
        where: {
          id: args.id,
        },
        data: {
          prioridad: args.prioridad,
          estado: args.estado,
          descripcion: args.descripcion,
          // Usuario: args.Usuario,
          usuarioId: args.usuarioId,
          proyectoId: args.proyectoId,
          Proyecto: args.Proyecto,
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
