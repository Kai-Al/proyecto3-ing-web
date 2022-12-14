import { gql } from 'apollo-server-micro';

const usuarioTypes = gql`
  enum Enum_Role {
    Administrador
    Cliente
    Desarrrollador
  }

  input UsuarioCreateInput {
    nombre: String!
    email: String!
  }

  input UsuarioUpdateInput {
    nombre: String
    email: String
    role: Enum_Role
  }

  type Usuario {
    id: ID
    name: String
    email: String
    role: Enum_Role
    proyectos: [Proyecto]
    comentarios: [Comentario]
    bugs: [Bug]
    respuestas: [Respuesta]
  }

  type Query {
    obtenerUsuarios: [Usuario]
    obtenerUsuario(email: String): Usuario
  }

  type Mutation {
    setUsuario(data: UsuarioCreateInput): Usuario
    updateUsuario(emailOriginal: String!, data: UsuarioUpdateInput): Usuario
    deleteUsuario(email: String!): Usuario
  }
`;

export { usuarioTypes };
