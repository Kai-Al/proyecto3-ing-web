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

  input BugCreateInput {
    descripcion: String
    usuarioId: String
    proyectoId: String
  }

  type Bug {
    id: ID
    prioridad: Enum_PrioridadBug
    estado: Enum_EstadoBug
    descripcion: String
    #usuario: Usuario
    usuarioId: String
    proyectoId: String
    #Proyecto: Proyecto
    #comentarios: [Comentario]
  }

  type Query {
    obtenerBugs: [Bug]
    obtenerBug: Bug
  }

  type Mutation {
    setBug(data: BugCreateInput): Bug
    updateBug(
      id: ID
      prioridad: Enum_PrioridadBug
      estado: Enum_EstadoBug
      descripcion: String
      usuario: Usuario
      usuarioId: String
      proyectoId: String
      Proyecto: Proyecto
    ): Bug
    deleteBug(id: ID): Boolean
  }
`;

export { bugTypes };
