import Link from 'next/link';
import Button from 'components/Button';

const TableProyectos = ({ usuarios }) => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <div className='bg-slate-300 p-2 flex flex-col place-content-center rounded-2xl'>
      <div className='flex flex-row gap-1 place-content-end'>
        <Button>
          <Link href='/newUsuario'>
            <a>Nuevo usuario</a>
          </Link>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='px-4'>Nombre</th>
            <th className='px-4'>Rol</th>
            <th className='px-4'>Proyectos</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.obtenerUsuarios.map(usuario => (
            <tr>
              <td className='px-4 py-2'>{usuario.name}</td>
              <td className='px-4 py-2'>{usuario.role}</td>
              <td className='px-4 py-2'>
                <div className='flex flex-col'>
                  {' '}
                  {usuario.proyectos.map(proyectoMap => (
                    <a>{proyectoMap.nombre}</a>
                  ))}
                </div>
              </td>
              <td className='px-4 py-2'>
                <div className='flex flex-row place-content-center gap-1'>
                  <Button>
                    <a>Ver</a>
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
