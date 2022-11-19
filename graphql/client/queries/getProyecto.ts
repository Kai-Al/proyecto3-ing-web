import { gql } from '@apollo/client';

const GET_PROYECTO = gql`
  query ObtenerProyecto($id: String!) {
    obtenerProyecto(id: $id) {
      id
      nombre
      descripcion
      usuarios {
        name
        email
        role
      }
      bugs {
        id
        estado
        descripcion
        carga
        isFinalizado
        prioridad
        usuario {
          name
          email
          role
        }
      }
    }
  }
`;

export { GET_PROYECTO };
