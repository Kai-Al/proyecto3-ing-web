import { gql } from '@apollo/client';

const SET_PROYECTOS = gql`
  mutation Mutation($data: ProyectoCreateInput) {
    setProyecto(data: $data) {
      descripcion
      nombre
    }
  }
`;

export { SET_PROYECTOS };
