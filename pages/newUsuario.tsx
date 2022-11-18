import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import FormUsuarios from '@components/FormUsuario';

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
          <h1 className='py-4 text-3xl text-center font-bold'>Usuario</h1>
          <div className='max-w-xs mx-auto sm:px-6 lg:px-8'>
            <FormUsuarios />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
