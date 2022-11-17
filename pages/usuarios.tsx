import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import TableUsuarios from '@components/TableUsuarios';

const Home: NextPage = () => {
  const { status } = useSession();

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
          <TableUsuarios />
        </div>
      )}
    </>
  );
};

export default Home;
