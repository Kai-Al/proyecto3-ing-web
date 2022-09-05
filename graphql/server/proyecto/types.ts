import { gql } from 'apollo-server-micro';

const proyectoTypes = gql`
  input ProyectoCreateInput {
    nombre: String!
    descripcion: String!
    clienteEmail: String!
  }

  input ProyectoUpdateInput {
    nombre: String
    descripcion: String
    newUsers: [String]
    firedUsers: [String]
  }
  
  type Proyecto {
    id: ID
    nombre: String
    descripcion: String
    usuarios: [Usuario]
    bugs: [Bug]
  }

  type Query {
    obtenerProyectos: [Proyecto],
    obtenerProyecto(nombre: String!): Proyecto,
  }

  type Mutation {
    setProyecto(data: ProyectoCreateInput): Proyecto,
    deleteProyecto(nombre: String!): Proyecto,
    updateProyecto(name:String!, data: ProyectoUpdateInput): Proyecto,
  }
`;

export { proyectoTypes };
