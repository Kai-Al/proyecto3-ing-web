import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
      id
      nombre
      descripcion
    }
  }
`;

export { GET_PROYECTOS };
