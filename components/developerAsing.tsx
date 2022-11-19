import Button from 'components/Button';
import Link from 'next/link';
import { useState } from 'react';

const FormProyecto = () => {
  const [state, setState] = useState({
    nombre: '',
    cliente: '',
    desarrollador: '',
    descripcion: '',
  });

  const handleSubmit = (): any => {
    console.log('xD');
    console.log(state);
  };

  return (
    <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
      <div>Desarrollador asignado</div>
      <div>
        <select
          aria-label='desarrollador'
          className=' p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 '
          onChange={e => {
            state.desarrollador = e.target.value;
          }}
        >
          <option>Desarrollador</option>
          <option>Marcelo</option>
          <option>Andrew</option>
        </select>
      </div>
      <div>
        <button
          type='button'
          className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => {
            handleSubmit();
          }}
        >
          <Link href='proyectos'>
            <a>Guardar</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FormProyecto;
