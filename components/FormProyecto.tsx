import Button from 'components/Button';
import Link from 'next/link';

const FormProyecto = () => (
  <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
    <div>
      <label htmlFor='nombre'>
        Nombre
        <input type='text' id='nombre' name='nombre' />
      </label>
    </div>
    <div>Cliente asignado</div>
    <div>
      <select
        aria-label='rol'
        className=' p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 '
      >
        <option>Pedro</option>
        <option>Camilo</option>
      </select>
    </div>
    <div>Desarrollador asignado</div>
    <div>
      <select
        aria-label='desarrollador'
        className=' p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 '
      >
        <option>Marcelo</option>
        <option>Andrew</option>
      </select>
    </div>
    <div>
      <Button>
        <Link href='proyectos'>
          <a>Guardar</a>
        </Link>
      </Button>
    </div>
  </div>
);

export default FormProyecto;
