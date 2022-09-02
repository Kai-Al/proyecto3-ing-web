import { gql } from "apollo-server-micro";

const usuarioTypes = gql`
    enum Enum_Role {
        Administrador
        Cliente
        Desarrrollador
    }

    input UsuarioCreateInput {
        identificacion: String!
        nombre: String!
        email: String!
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
        setUsuario(data: UsuarioCreateInput): Usuario,
        updateUsuario(id: ID, nombre: String, email: String, isHabilitado: Boolean, role: Enum_Role): Usuario,
    }
`;

export { usuarioTypes };
