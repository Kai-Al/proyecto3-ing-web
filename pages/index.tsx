import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data, status } = useSession();

  return (
    <>
      <NavBar />
      {status === 'authenticated' && (
        <div className='flex flex-row py-4 text-3xl text-center justify-center'>
          <h1>Bienvenido</h1>
          <h1 className='font-bold ml-4'>{data.user.name}</h1>
        </div>
      )}
      {status === 'unauthenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>
            Por favor inicie sesión
          </h1>
        </div>
      )}
    </>
  );
};

export default Home;
