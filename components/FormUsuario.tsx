import Button from 'components/Button';
import Link from 'next/link';

const FormUsuarios = () => (
  <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
    <div>
      <label htmlFor='nombre'>
        Nombre
        <input type='text' id='nombre' name='nombre' />
      </label>
    </div>
    <div>
      <label htmlFor='correo'>
        Correo <br />
        <input type='text' id='correo' name='correo' />
      </label>
    </div>
    <div>Rol</div>
    <div>
      <select
        aria-label='rol'
        className=' p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 '
      >
        <option>Cliente</option>
        <option>Desarrollador</option>
        <option>Administrador</option>
      </select>
    </div>
    <div>
      <Button>
        <Link href='usuarios'>
          <a>Guardar</a>
        </Link>
      </Button>
    </div>
  </div>
);

export default FormUsuarios;
