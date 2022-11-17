import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import Button from './Button';

const NavBar = () => {
  const { status } = useSession();

  return (
    <div className='bg-blue-500'>
      <nav>
        <div className='p-4 gap-3 flex flex-row place-content-end'>
          {status === 'authenticated' && (
            <Button>
              <Link href='/proyectos'>
                <a>Proyectos</a>
              </Link>
            </Button>
          )}
          {status === 'authenticated' && (
            <Button>
              <Link href='/usuarios'>
                <a>Usuarios</a>
              </Link>
            </Button>
          )}
          <div className='flex flex-col'>
            <div className='flex'>
              {status === 'unauthenticated' && (
                <Button>
                  <button
                    type='button'
                    className='primary'
                    onClick={() => signIn('auth0')}
                  >
                    Iniciar Sesión
                  </button>
                </Button>
              )}
              {status === 'authenticated' && (
                <Button>
                  <button
                    type='button'
                    className='primary'
                    onClick={() => signOut()}
                  >
                    Cerrar Sesión
                  </button>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
