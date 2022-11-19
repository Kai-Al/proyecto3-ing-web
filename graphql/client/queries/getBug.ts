import { gql } from '@apollo/client';

const GET_BUG = gql`
  query ObtenerBug($id: String) {
    obtenerBug(id: $id) {
      carga
      descripcion
      estado
      id
      isFinalizado
      prioridad
      usuario {
        id
        name
        email
      }
      comentarios {
        id
        textoComentario
        createdAt
        Usuario {
          name
        }
        respuestas {
          id
          textoRespuesta
          createdAt
          Usuario {
            name
          }
        }
      }
    }
  }
`;

export { GET_BUG };
