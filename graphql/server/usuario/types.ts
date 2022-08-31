import { gql } from "apollo-server-micro";

const usuarioTypes = gql`
    enum Enum_Role {
        Administrador
        Cliente
        Desarrrollador
    }

    type Usuario {
        id: ID
        identificacion: String
        nombre: String
        email: String
        isHabilitado: Boolean
        role: Enum_Role
        #proyectos: [Proyecto]
        #comentarios: [Comentario]
        #bugs: [Bug]
    }

    type Query {
        obtenerUsuarios: [Usuario]
    }

    type Mutation {
        setUsuario(identificacion: String!, nombre: String!, email: String!): Usuario
    }
`;

export { usuarioTypes };
