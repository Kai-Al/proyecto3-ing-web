import Button from './Button';

const NavBar = () => (
  <div className='bg-blue-500'>
    <nav>
      <div className='p-4 gap-3 flex flex-row place-content-end'>
        <Button>Proyectos</Button>
        <Button>Usuarios</Button>
      </div>
    </nav>
  </div>
);

export default NavBar;
