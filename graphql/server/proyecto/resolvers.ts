import { Resolver } from 'types';
import prisma from 'config/prisma';

const proyectoResolvers: Resolver = {
  Proyecto: {
    usuarios: async (parent, args) => {
      const usuarios = await prisma.proyecto
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .usuarios();
      return usuarios;
    },
  },
  Query: {
    obtenerProyectos: async (parent, args) => {
      const proyecto = await prisma.proyecto.findMany();
      return proyecto;
    },
    obtenerProyecto: async (parent, args) =>
      await prisma.proyecto.findUnique({
        where: {
          nombre: args.nombre,
        },
      }),
  },

  Mutation: {
    setProyecto: async (parent, args) => {
      const nuevoProyecto = await prisma.proyecto.create({
        data: {
          nombre: args.data.nombre,
          descripcion: args.data.descripcion,
          usuarios: {
            connect: {
              email: args.data.clienteEmail,
            },
          },
        },
      });
      return nuevoProyecto;
    },
    deleteProyecto: async (parent, args) =>{
      const proyecto = await prisma.proyecto.delete({
        where: {
          nombre: args.nombre,
        },
      });
      return proyecto;
    },
    updateProyecto: async (parent, args) => {
      const usuarios = await prisma.proyecto
        .findFirst({
          where: {
            nombre: args.name,
          },
        })
        .usuarios();
      let usuariosEmails = usuarios.map(usuario => usuario.email);

      if (args.data !== undefined) {
        if (args.data.firedUsers) {
          usuariosEmails = usuariosEmails.filter(
            email => !args.data.firedUsers.includes(email)
          );
        }
        if (args.data.newUsers) {
          usuariosEmails = usuariosEmails.concat(args.data.newUsers);
        }
      }
      return await prisma.proyecto.update({
        where: {
          nombre: args.name,
        },
        data: {
          nombre: args.data.nombre,
          descripcion: args.data.descripcion,
          usuarios: {
            set: usuariosEmails.map(email => ({ email })),
          },
        },
      });
    },
  },
};

export { proyectoResolvers };
