import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { usuarioResolvers } from '@graphql/server/usuario/resolvers';
import { bugResolvers } from '@graphql/server/bug/resolvers';

const globalResolvers: Resolver[] = [
  model1Resolvers,
  usuarioResolvers,
  bugResolvers,
];

export { globalResolvers };
