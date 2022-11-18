import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import TableUsuarios from '@components/TableUsuarios';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USUARIOS } from '@graphql/client/queries/getUsuarios';

const Home: NextPage = () => {
  const { status } = useSession();
  const { data, loading } = useQuery(GET_USUARIOS);

  useEffect(() => {    console.log('data: ', data);
  }, [data]);

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
      {status === 'unauthenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>Unauthorized</h1>
        </div>
      )}
      {status === 'authenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>Usuarios</h1>
          <TableUsuarios usuarios={data} />
        </div>
      )}
    </>
  );
};

export default Home;
