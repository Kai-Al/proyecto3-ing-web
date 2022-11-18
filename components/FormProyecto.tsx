import Button from 'components/Button';
import Link from 'next/link';
import { useState } from 'react';

const FormProyecto = () => {
  const [state, setState] = useState({
    nombre: '',
    cliente: '',
    desarrollador: '',
  });

  const handleSubmit = (): any => {
    console.log('xD');
    console.log(state)

  };

  return (
    <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
      <div>
        <label htmlFor='nombre'>
          Nombre
          <input
            type='text'
            id='nombre'
            name='nombre'
            onChange={e => {
              state.nombre = e.target.value;
            }}
          />
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
