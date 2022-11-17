import Button from './Button';

const TableProyectos = () => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <div className='bg-slate-300 p-2 flex flex-col place-content-center rounded-2xl'>
      <div className='flex flex-row gap-1 place-content-end'>
        <Button>Nuevo Usuario</Button>
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
          <tr>
            <td className='px-4 py-2'>User</td>
            <td className='px-4 py-2'>Rol cualquiera</td>
            <td className='px-4 py-2'>
              <div className='flex flex-col'>
                {' '}
                <a>pizzeria</a> <a>panaderia</a>
              </div>
            </td>
            <td className='px-4 py-2'>
              <div className='flex flex-row place-content-center gap-1'>
                <Button>ver</Button>
                <Button>editar</Button>
                <Button>eliminar</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TableProyectos;
