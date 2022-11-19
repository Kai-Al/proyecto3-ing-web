import { useQuery } from '@apollo/client';
import NavBar from '@components/NavBar';
import { GET_BUG } from '@graphql/client/queries/getBug';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next/types';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id,
    },
  };
}

const ResumenBug: NextPage<{ id: String }> = ({ id }) => {
  const { status } = useSession();
  const { data, loading } = useQuery(GET_BUG, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  if (!loading) {
    const { carga, estado, prioridad, usuario, comentarios, descripcion } =
      data.obtenerBug;

    return (
      <>
        <NavBar />
        {status === 'authenticated' && (
          <div>
            <div className='flex flex-row py-4 text-3xl text-center justify-center'>
              <h1>Resumen del Bug: </h1>
            </div>
            <div className='flex justify-evenly'>
              <div className='bg-slate-100 p-2 flex flex-col place-content-center rounded-2xl'>
                <div className='flex flex-row'>
                  <h1>ID del Bug:</h1>
                  <h1 className='ml-2 font-bold'>{id}</h1>
                </div>
                <div className='flex flex-row'>
                  <h1>Descripción:</h1>
                  <h1 className='ml-2 font-bold'>{descripcion}</h1>
                </div>
                <div className='flex flex-row'>
                  <h1>Estado:</h1>
                  <h1 className='ml-2 font-bold'>{estado}</h1>
                </div>
                <div className='flex flex-row'>
                  <h1>Carga:</h1>
                  <h1 className='ml-2 font-bold'>{carga}</h1>
                </div>
                <div className='flex flex-row'>
                  <h1>Prioridad:</h1>
                  <h1 className='ml-2 font-bold'>{prioridad}</h1>
                </div>
              </div>
              <div className='flex flex-col bg-slate-100 p-2 place-content-center rounded-2xl'>
                <tbody>
                  <thead>
                    <tr className='font-bold'>Usuario asignado</tr>
                  </thead>
                  <tr>
                    <td className='px-4 py-2'>{usuario.name}</td>
                    <td className='px-4 py-2'>{usuario.email}</td>
                    <td className='px-4 py-2'>{usuario.role}</td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8'>
              <table className='bg-slate-100 p-4 flex flex-col place-content-center rounded-2xl'>
                <thead>
                  <tr>
                    {comentarios.map((comentario) => (
                      <div className='my-8'>
                        <div className='flex flex-row'>
                          <h1>Comentario ID: </h1>
                          <h1 className='ml-2 font-bold'>{comentario.id}</h1>
                        </div>
                        <tr>{comentario.textoComentario}</tr>
                      </div>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
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

export default ResumenBug;
