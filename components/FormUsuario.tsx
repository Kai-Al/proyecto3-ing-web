import Button from 'components/Button';
import Link from 'next/link';

const FormUsuarios = () => (
  <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
    <div>
      <label htmlFor='nombre'>
        Editar nombre
        <input type='text' id='nombre' name='nombre' />
      </label>
    </div>
    <div>Correo</div>
    <div>Rol</div>
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
