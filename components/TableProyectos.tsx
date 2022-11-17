import Button from './Button';

const TableProyectos = () => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <div className='bg-slate-300 p-2 flex flex-col place-content-center rounded-2xl'>
      <div className='flex flex-row gap-1 place-content-end'>
        <Button>Nuevo proyecto</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='px-4'>Nombre</th>
            <th className='px-4'>Descripcion</th>
            <th className='px-4'>Cliente</th>
            <th className='px-4'>Desarrolladores</th>
            <th className='px-4'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2'>pizza</td>
            <td className='px-4 py-2'>hacer pizza</td>
            <td className='px-4 py-2'>yo</td>
            <td className='px-4 py-2'>tu</td>
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
