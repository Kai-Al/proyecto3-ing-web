import NavBar from '@components/NavBar';
import TableProyectos from '@components/TableProyectos';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from '@graphql/client/queries/getProyectos';

const Proyectos: NextPage = () => {
  const { status } = useSession();
  const { data, loading } = useQuery(GET_PROYECTOS);

  if (loading) {
    return (
      <div>
        <h1 className='py-4 text-3xl text-center font-bold'>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {status === 'authenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>Proyectos</h1>
          <TableProyectos proyectos={data} />
        </div>
      )}
      {status === 'unauthenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>Unauthorized</h1>
        </div>
      )}
    </>
  );
};

export default Proyectos;
