import { gql } from 'apollo-server-micro';

const respuestaTypes = gql`
  type Respuesta {
    id: ID
    textoRespuesta: String
    Usuario: Usuario
    Comentario: Comentario
    createdAt: Date
    updatedAt: Date
  }

  input CrearRespuestaInput {
    textoRespuesta: String!
    comentarioId: String!
    emailAuthor: String!
  }

  input ActualizarRespuestaInput {
    id: String!
    textoRespuesta: String
    comentarioId: String
    usuarioId: String
  }

  type Query {
    obtenerRespuesta(id: String): Respuesta
  }
  type Mutation {
    crearRespuesta(data: CrearRespuestaInput): Respuesta
    actualizarRespuesta(data: ActualizarRespuestaInput): Respuesta
    eliminarRespuesta(id: String): Respuesta
  }
`;

export { respuestaTypes };
