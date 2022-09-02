import { Resolver } from 'types';
import prisma from 'config/prisma';

const proyectoResolvers: Resolver = {
  Query: {
    obtenerProyectos: async (parent, args) => {
      const proyecto = await prisma.proyecto.findMany();
      return proyecto;
    },
  },
  Mutation: {},
};

export { proyectoResolvers };
