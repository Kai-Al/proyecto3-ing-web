import NavBar from '@components/NavBar';
import TableProyectos from '@components/TableProyectos';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <>
      <NavBar />
      {status === 'authenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>Proyectos</h1>
          <TableProyectos />
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

export default Home;
