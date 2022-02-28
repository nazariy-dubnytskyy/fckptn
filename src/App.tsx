import React, { useEffect } from 'react';
import './App.css';
import { WorkerPool } from './loader';

const pool = new WorkerPool(100);

function App() {
  const runJob = async () => {
    pool.process('https://www.gazprombank.ru');
  };

  useEffect(() => {
    // runJob();
  }, []);

  return (
    <div className='App'>
      <section>
        <button type='button' onClick={() => runJob()}>
          start
        </button>
      </section>
    </div>
  );
}

export default App;
