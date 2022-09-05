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
    nameProyecto: String
    prioridad: Enum_PrioridadBug
  }

  input BugUpdateClienteInput {
    id: String
    descripcion: String
    prioridad: Enum_PrioridadBug
    isFinalizado: Boolean
  }

  type Bug {
    id: ID
    descripcion: String
    prioridad: Enum_PrioridadBug
    estado: Enum_EstadoBug
    usuario: Usuario
    carga: String
    isFinalizado: Boolean
    #usuarioId: String
    #proyectoId: String
    proyecto: Proyecto
    #comentarios: [Comentario]
  }

  type Query {
    obtenerBugs: [Bug]
    obtenerBug(id: String): Bug
  }

  type Mutation {
    setBug(data: BugCreateInput): Bug
    updateBugCliente(data: BugUpdateClienteInput): Bug
    deleteBug(id: String): Bug
  }
`;

export { bugTypes };
