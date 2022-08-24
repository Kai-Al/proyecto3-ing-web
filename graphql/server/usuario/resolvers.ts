import { Resolver } from 'types';
import prisma from 'config/prisma';

const usuarioResolvers: Resolver = {
    Query: {
        obtenerUsuarios: async (parent, args) => {
            const usuario = await prisma.usuario.findMany();
            return usuario;
        },
    },
    Mutation: {},
};

export { usuarioResolvers };