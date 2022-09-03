import { Resolver } from 'types';
import prisma from 'config/prisma';
import { usuarioResolvers } from '../usuario/resolvers';
import { connect } from 'http2';


const proyectoResolvers: Resolver = {
  Query: {
    obtenerProyectos: async (parent, args) => {
      const proyecto = await prisma.proyecto.findMany();
      return proyecto;
    },
  },
  
  
  Mutation: {
    setProyecto: async (parent, args) => {
      const nuevoProyecto = await prisma.proyecto.create({
        data: {
          nombre: args.data.nombre,
          descripcion: args.data.descripcion,
          usuarios: {
            connect: {
              email: args.data.email,
            },
          },
        },
      });
      return nuevoProyecto;
    },
    deleteProyecto: async (parent, args) => {
      return await prisma.proyecto.delete({
        where: {
          nombre: args.nombre,
        }
      });
    },
    updateProyecto: async (parent, args) => { 
      return await prisma.proyecto.update({
        where: {
          nombre: args.name,
        },
        data: {
          nombre: args.data.newName,
          descripcion: args.data.descripcion,
          usuarios: {
            set: [
              {
                email: args.data.clienteEmail,
              }, 
            ]
          }
        }
      });
    }
  },
};

export { proyectoResolvers };
