import { useQuery } from '@apollo/client';
import { GET_MOCK_MODEL } from '@graphql/client/queries/getMockModel';
import React from 'react';
import Loading from '@components/Loading';
import { MockModel } from 'types';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Enum_Role } from '@prisma/client';
import PrivateComponent from 'components/PrivateComponent';

const MyComponent = () => {
  const { data, loading } = useQuery(GET_MOCK_MODEL);
  const { status } = useSession();

  if (loading) return <Loading />;
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex'>
          {status === 'unauthenticated' && (
            <button
              type='button'
              className='primary'
              onClick={() => signIn('auth0')}
            >
              Iniciar Sesión
            </button>
          )}
          {status === 'authenticated' && (
            <button type='button' className='primary' onClick={() => signOut()}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
      <PrivateComponent roleList={[Enum_Role.Administrador]}>
        <div className='flex flex-col'>
          <div className='flex'>
            <h1>Hola</h1>
          </div>
        </div>
      </PrivateComponent>
    </>
  );
};

export default MyComponent;
