import Button from 'components/Button';
import Link from 'next/link';
import ButtonDownloadCSV from 'components/ButtonDownloadCSV';

const TableBugs = ({ nombre, bugs }: any) => (
  <>
    <div className='flex flex-row py-4 text-3xl text-center justify-center'>
      <h1>Bugs del proyecto </h1>
    </div>

    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
      <div className='bg-slate-100 p-4 flex flex-col place-content-center rounded-2xl'>
        <div className='flex flex-row gap-1 place-content-end'>
          <ButtonDownloadCSV bugs={bugs}>
            <a>Descargar CSV</a>
          </ButtonDownloadCSV>
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
            {bugs.map((bug: any) => (
              <tr>
                <td className='px-4 py-2'>{bug.id}</td>
                <td className='px-4 py-2'>{bug.descripcion}</td>
                <td className='px-4 py-2'>{bug.estado}</td>
                <td className='px-4 py-2'>{bug.carga}</td>
                <td className='px-4 py-2'>{bug.prioridad}</td>
                <td className='px-4 py-2'>{bug.isFinalizado}</td>
                <td className='px-4 py-2'>
                  <div className='flex flex-row place-content-center gap-1'>
                    <Button>
                      <Link
                        href={{
                          pathname: `/resumenBug`,
                          query: {
                            id: bug.id,
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
  </>
);

export default TableBugs;
