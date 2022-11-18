import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
      id
      nombre
      descripcion
      usuarios {
        name
        role
      }
    }
  }
`;

export { GET_PROYECTOS };
