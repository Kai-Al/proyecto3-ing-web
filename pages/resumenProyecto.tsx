import NavBar from '@components/NavBar';
import { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import { GET_PROYECTO } from '@graphql/client/queries/getProyecto';
import { useQuery } from '@apollo/client';
import TableBugs from '@components/TableBugs';

export async function getServerSideProps(context) {
  console.log("ID PROYECTO",context.query.id)
  return {
    props: {
      id: context.query.id,
    },
  };
}

const ResumenProyecto: NextPage<{ id: String }> = ({ id }) => {
  const { status } = useSession();
  
  const { data } = useQuery(GET_PROYECTO, {
    variables: {
      id,
    },
  });
  console.log(data)

  const { descripcion, nombre, usuarios, bugs } = data.obtenerProyecto;

  return (
    <>
      <NavBar />
      {status === 'authenticated' && (
        <div>
          <h1 className='py-4 text-3xl text-center font-bold'>
            Resumen del proyecto
          </h1>
          <TableBugs nombre={nombre} bugs={bugs}/>
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

export default ResumenProyecto;
