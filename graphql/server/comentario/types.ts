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
    textoComentario: String!
    bugId: String!
    usuarioId: String!
  }

  input ActualizarComentarioInput {
    id: String!
    textoComentario: String
    bugId: String
    usuarioId: String
  }

  type Query {
    obtenerComentario(id: String): Comentario
  }
  type Mutation {
    crearComentario(data: CrearComentarioInput): Comentario
    actualizarComentario(data: ActualizarComentarioInput): Comentario
    eliminarComentario(id: String): Comentario
  }
`;

export { comentarioTypes };
