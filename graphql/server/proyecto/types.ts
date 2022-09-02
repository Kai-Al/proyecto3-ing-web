import { gql } from 'apollo-server-micro';

const proyectoTypes = gql`
  type Proyecto {
    id: ID
    nombre: String
    descripcion: String
    #usuarios: [Usuario]
    #bugs: [Bug]
  }

  type Query {
    obtenerProyectos: [Proyecto]
  }

  type Mutation {
    setProyecto(id: String, nombre: String, descripcion: String): Proyecto
  }
`;

export { proyectoTypes };
