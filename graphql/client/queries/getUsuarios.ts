import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query ObtenerUsuarios {
    obtenerUsuarios {
      id
      name
      role
      proyectos {
        nombre
      }
    }
  }
`;

export { GET_USUARIOS };
