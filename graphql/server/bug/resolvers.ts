import { Resolver } from 'types';
import prisma from 'config/prisma';

const bugResolvers: Resolver = {
  Query: {
    obtenerBugs: async (parent, args) => {
      const bug = await prisma.bug.findMany();
      return bug;
    },
  },
  Mutation: {},
};

export { bugResolvers };
