import { gql } from 'apollo-server-micro';

const comentarioTypes = gql`
  type Comentario {
    id: ID
    textoComentario: String
    Usuario: Usuario
    Bug: Bug
    createdAt: Date
    updatedAt: Date
    respuestas: [Respuesta]
  }

  input CrearComentarioInput {
    textoComentario: String!
    bugId: String!
    emailAuthor: String!
  }

  input ActualizarComentarioInput {
    id: String!
    textoComentario: String
    bugId: String
    usuarioId: String
  }

  type Query {
    obtenerComentarios: [Comentario]
    obtenerComentario(id: String): Comentario
  }
  type Mutation {
    crearComentario(data: CrearComentarioInput): Comentario
    actualizarComentario(data: ActualizarComentarioInput): Comentario
    eliminarComentario(id: String): Comentario
  }
`;

export { comentarioTypes };
