import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { model1Types } from '@graphql/server/model1/types';
import { usuarioTypes } from '@graphql/server/usuario/types';
import { bugTypes } from '@graphql/server/bug/types';
import { proyectoTypes } from '@graphql/server/proyecto/types';
import { comentarioTypes } from '@graphql/server/comentario/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  model1Types,
  usuarioTypes,
  bugTypes,
  proyectoTypes,
  comentarioTypes,
];

export { globalTypes };
