import Button from 'components/Button';
import Link from 'next/link';
import { useState } from 'react';

const FormProyecto = () => {
  const [state, setState] = useState({
    nombre: '',
    descripcion: '',
  });

  const handleSubmit = (): any => {
    console.log('xD');
    console.log(state);
  };

  return (
    <div className='bg-slate-300 gap-2  p-3 flex flex-col text-center rounded-2xl'>
      <div>
        <label htmlFor='nombre'>
          Nombre
          <br />
          <input
            type='text'
            id='nombre'
            name='nombre'
            onChange={e => {
              state.nombre = e.target.value;
            }}
          />
        </label>
        <label htmlFor='descripcion'>
          Descipcion
          <input
            type='text'
            id='descripcion'
            name='descripcion'
            onChange={e => {
              state.descripcion = e.target.value;
            }}
          />
        </label>
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
