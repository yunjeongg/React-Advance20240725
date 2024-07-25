import React, { memo } from 'react';
import { log } from '../../log';

const CounterOutput = ({ value }) => {
  log('<CounterOutput /> rendered', 2);

  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
};
// export default memo(CounterOutput);
export default CounterOutput;
