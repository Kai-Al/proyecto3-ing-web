import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import { Enum_Role } from '@prisma/client';

const Grafica = ({ usuarios }: any) => {
  const [bugs, setBugs] = useState({});
  const [clientes, setClientes] = useState([]);

  Chart.register(CategoryScale, ArcElement, Tooltip, Legend);
  const data = {
    labels: clientes,
    datasets: [
      {
        label: '# de bugs',
        data: bugs,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['#ff6384'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  useEffect(() => {
    const bugsUsuario: any = [];
    const clientesConBugs: any = [];
    // eslint-disable-next-line array-callback-return
    usuarios.obtenerUsuarios.map((usuario: any) => {
      if (usuario.role === Enum_Role.Cliente) {
        clientesConBugs.push(usuario.name);
        bugsUsuario.push(usuario.bugs.length);
      }
    });
    setBugs(bugsUsuario);
    setClientes(clientesConBugs);
  }, [usuarios]);

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
export default Grafica;
