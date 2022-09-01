import { Resolver } from 'types';
import prisma from 'config/prisma';

const usuarioResolvers: Resolver = {
    Query: {
        obtenerUsuarios: async (parent, args) => {
            const usuario = await prisma.usuario.findMany();
            return usuario;
        },
    },
    Mutation: {
        setUsuario: async (parent, args) => {
            const usuario = await prisma.usuario.create({
                data: {
                    identificacion: args.data.identificacion,
                    nombre: args.data.nombre,
                    email: args.data.email,
                    isHabilitado: false,
                    role: 'Cliente',
                },
            });
            return usuario;
        }
    },
};

export { usuarioResolvers };