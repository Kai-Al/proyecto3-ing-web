import NavBar from '@components/NavBar';
import TableProyectos from '@components/TableProyectos';
import { NextPage } from 'next/types';

const Home: NextPage = () => (
  <>
    <NavBar />
    <h1 className='py-4 text-3xl text-center font-bold'>Proyectos</h1>
    <TableProyectos />
  </>
);

export default Home;
