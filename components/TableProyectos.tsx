import Button from 'components/Button';
import Link from 'next/link';
import { Enum_Role } from '@prisma/client';

const TableProyectos = ({ proyectos }: any) => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <div className='bg-slate-100 p-4 flex flex-col place-content-center rounded-2xl'>
      <div className='flex flex-row gap-1 place-content-end'>
        <Button>
          <Link href='/newProyecto'>
            <a>Nuevo proyecto</a>
          </Link>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='px-4'>ID</th>
            <th className='px-4'>Nombre</th>
            <th className='px-4'>Descripcion</th>
            <th className='px-4'>Clientes</th>
            <th className='px-4'>Desarrolladores</th>
            <th className='px-4'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.obtenerProyectos.map((proyecto: any) => (
            <tr>
              <td className='px-4 py-2'>{proyecto.id}</td>
              <td className='px-4 py-2'>{proyecto.nombre}</td>
              <td className='px-4 py-2'>{proyecto.descripcion}</td>
              <td className='px-4 py-2'>
                <div className='flex flex-col'>
                  {' '}
                  {proyecto.usuarios
                    .filter(
                      (usuario: any) => usuario.role === Enum_Role.Cliente
                    )
                    .map((usuarioMap: any) => (
                      <a>{usuarioMap.name}</a>
                    ))}
                </div>
              </td>
              <td className='px-4 py-2'>
                <div className='flex flex-col'>
                  {' '}
                  {proyecto.usuarios
                    .filter(
                      (usuario: any) =>
                        usuario.role === Enum_Role.Desarrrollador
                    )
                    .map((usuarioMap: any) => (
                      <a>{usuarioMap.name}</a>
                    ))}
                </div>
              </td>
              <td className='px-4 py-2'>
                <div className='flex flex-row place-content-center gap-1'>
                  <Button>
                    <Link
                      href={{
                        pathname: `/resumenProyecto`,
                        query: {
                          id: proyecto.id,
                        },
                      }}
                    >
                      <a>Ver</a>
                    </Link>
                  </Button>
                  <Button>
                    <a>Editar</a>
                  </Button>
                  <Button>
                    <a>Eliminar</a>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TableProyectos;
