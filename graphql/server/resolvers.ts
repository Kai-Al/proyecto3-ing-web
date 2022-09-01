import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { usuarioResolvers } from '@graphql/server/usuario/resolvers';
import { ComentarioResolvers } from '@graphql/server/comentario/resolver';

const globalResolvers: Resolver[] = [
  model1Resolvers,
  usuarioResolvers,
  ComentarioResolvers,
];

export { globalResolvers };
