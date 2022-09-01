import { gql } from 'apollo-server-micro';

const comentarioTypes = gql`
  type Comentario {
    id: ID!
    textoComentario: String
    usuario: Usuario
    usuarioId: String
    bug: Bug
    bugId: String
    createdAt: Date
    updatedAt: Date
    respuestas: [Comentario]
    comentario: Comentario
    comentarioId: String
  }

  input CrearComentarioInput {
    id: String
  }

  type Query {
    obtenerComentario(id: String): Comentario
  }
  type Mutation {
    random(identificacion: String!, nombre: String!, email: String!): Usuario
  }
`;

export { comentarioTypes };
