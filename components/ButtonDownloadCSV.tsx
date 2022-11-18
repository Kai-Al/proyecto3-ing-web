import { CSVLink } from 'react-csv';
import Button from 'components/Button';
import { useState, useEffect } from 'react';

const ButtonDownloadCSV = ({ bugs }: any) => {
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    const bugsFinalizados: any = [];
    // eslint-disable-next-line array-callback-return
    bugs.map((bug: any) => {
      if (bug.isFinalizado === true) {
        bugsFinalizados.push(bug);
      }
    });
    setCsvData(bugsFinalizados);
  }, [bugs]);

  return (
    <CSVLink data={csvData} filename='bugsFinalizados.csv'>
      <Button>
        <button type='submit'>Descargar CSV</button>
      </Button>
    </CSVLink>
  );
};

export default ButtonDownloadCSV;
