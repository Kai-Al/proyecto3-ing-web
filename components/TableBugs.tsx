import Button from 'components/Button';

const TableBugs = ({ nombre, bugs }) => (
  <>
    <div className='flex flex-row py-4 text-3xl text-center justify-center'>
      <h1>Bugs del proyecto</h1>
      <h1 className='font-bold ml-4'>{nombre}</h1>
    </div>

    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
      <div className='bg-slate-300 p-2 flex flex-col place-content-center rounded-2xl'>
        <div className='flex flex-row gap-1 place-content-end'>
          <Button>
            <a>Agregar nuevo bug</a>
          </Button>
        </div>
        <table>
          <thead>
            <tr>
              <th className='px-4'>Id</th>
              <th className='px-4'>Descripción</th>
              <th className='px-4'>Estado</th>
              <th className='px-4'>Carga</th>
              <th className='px-4'>Prioridad</th>
              <th className='px-4'>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map(bug => (
              <tr>
                <td className='px-4 py-2'>{bug.id}</td>
                <td className='px-4 py-2'>{bug.descripcion}</td>
                <td className='px-4 py-2'>{bug.estado}</td>
                <td className='px-4 py-2'>{bug.carga}</td>
                <td className='px-4 py-2'>{bug.prioridad}</td>
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
  </>
);

export default TableBugs;
