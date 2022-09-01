import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { usuarioResolvers } from '@graphql/server/usuario/resolvers';
import { proyectoResolvers } from '@graphql/server/proyecto/resolvers';

const globalResolvers: Resolver[] = [
  model1Resolvers,
  usuarioResolvers,
  proyectoResolvers,
];

export { globalResolvers };
