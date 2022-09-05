import { gql } from 'apollo-server-micro';

const respuestaTypes = gql`
  type Respuesta {
    id: ID!
    textoRespuesta: String
    usuario: Usuario
    usuarioId: String
    comentario: Comentario
    comentarioId: String
    createdAt: Date
    updatedAt: Date
  }

  input CrearRespuestaInput {
    id: String!
    textoRespuesta: String!
    comentarioId: String!
    usuarioId: String!
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
