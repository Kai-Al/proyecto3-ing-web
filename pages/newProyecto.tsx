import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import FormProyecto from '@components/FormProyecto';

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
          <h1 className='py-4 text-3xl text-center font-bold'>Proyecto</h1>
          <div className='max-w-xs mx-auto sm:px-6 lg:px-8'>
            <FormProyecto />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
