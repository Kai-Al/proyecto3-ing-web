import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import { GET_PROYECTO } from '@graphql/client/queries/getProyecto';
import { useQuery } from '@apollo/client';
import TableBugs from '@components/TableBugs';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
  console.log('ID PROYECTO', context.query.id);
  return {
    props: {
      id: context.query.id,
    },
  };
}

const ResumenProyecto: NextPage<{ id: String }> = ({ id }) => {
  const { status } = useSession();

  const { data, loading } = useQuery(GET_PROYECTO, {
    variables: {
      id,
    },
  });
  console.log(data);

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  if (!loading) {
    const { descripcion, nombre, usuarios, bugs } = data.obtenerProyecto;

    return (
      <>
        <NavBar />
        {status === 'authenticated' && (
          <div>
            <div className='flex flex-row py-4 text-3xl text-center justify-center'>
              <h1>Resumen del proyecto: </h1>
              <h1 className='font-bold ml-4'>{nombre}</h1>
            </div>
            {/* <h1 className='py-4 text-3xl text-center font-bold'>
              Resumen del proyecto
            </h1> */}
            <div className='flex justify-around'>
              <div>
                <div className='flex flex-row'>
                  <h1>Nombre del proyecto:</h1>
                  <h1 className='ml-2'>{nombre}</h1>
                </div>
                <div className='flex flex-row'>
                  <h1>Descripción:</h1>
                  <h1 className='ml-2'>{descripcion}</h1>
                </div>
              </div>
              <div className='flex flex-col'>
                <tbody>
                  <thead>
                    <tr>Integrantes</tr>
                  </thead>
                  {usuarios.map((usuario) => (
                    <tr>
                      <td className='px-4 py-2'>{usuario.name}</td>
                      <td className='px-4 py-2'>{usuario.email}</td>
                      <td className='px-4 py-2'>{usuario.role}</td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>

            <TableBugs nombre={nombre} bugs={bugs} />
          </div>
        )}
        {status === 'unauthenticated' && (
          <div>
            <h1 className='py-4 text-3xl text-center font-bold'>
              Unauthorized
            </h1>
          </div>
        )}
      </>
    );
  }
  return (
    <div>
      <h1 className='py-4 text-3xl text-center font-bold'>Cargando...</h1>
    </div>
  );
};

export default ResumenProyecto;
