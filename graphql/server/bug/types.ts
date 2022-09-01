import { gql } from 'apollo-server-micro';

const bugTypes = gql`
  enum Enum_PrioridadBug {
    Urgente
    Alta
    Media
    Baja
  }

  enum Enum_EstadoBug {
    NoIniciado
    Iniciado
    EnPruebas
    Finalizado
  }

  type Bug {
    id: ID
    prioridad: Enum_PrioridadBug
    estado: Enum_EstadoBug
    descripcion: String
    Usuario: Usuario
    usuarioId: String
    #Proyecto: Proyecto
    proyectoId: String
    #comentarios: [Comentario]
  }

  type Query {
    obtenerBugs: [Bug]
  }

  type Mutation {
    setBug(descripcion: String!): Bug
  }
`;

export { bugTypes };
