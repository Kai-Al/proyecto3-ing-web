import { Resolver } from 'types';

const model1Resolvers: Resolver = {
  Query: {
    mockModelGetter: async (parent, args) => [
      { id: 1, name: 'Kai', description: 'David' },
      { id: 2, name: 'David', description: 'test' },
      { id: 4, name: 'test', description: 'test' },
      { id: 5, name: 'test', description: 'test' },
      { id: 6, name: 'test', description: 'test' },
    ],
  },
  Mutation: {},
};

export { model1Resolvers };
