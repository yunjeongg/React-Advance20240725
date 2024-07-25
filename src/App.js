import React, { useState } from 'react';

import Counter from './optimizing/components/Counter/Counter';
import Header from './optimizing/components/Header';
import { log } from './optimizing/log';
import ConfigureCounter from './optimizing/components/Counter/ConfigureCounter';

const App = () => {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const setCounterHandler = Number => {
    setChosenCount(Number);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={setCounterHandler} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;

