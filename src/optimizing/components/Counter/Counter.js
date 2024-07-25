import React, { useState, useCallback } from 'react';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';
import { log } from '../../log';

const isPrime = number => {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const Counter = ({ initialCount }) => {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = isPrime(initialCount);

  const [counter, setCounter] = useState(initialCount);

  // useCallback hook 는 변경사항이 없는 함수를 재생성하지 않고
  // 재사용하는 React hook 이다.
  // 2번째 파라미터 배열은 의존성 배열로, 안에 있는 값이 변경될 경우 함수를 재생성한다.
  // 비워놓으면 재생성되지 않는다.
  
  // const decrementHandler = useCallback((a) => {
  //   setCounter((prevCounter) => prevCounter - 1);
  // }, [a]);

  const decrementHandler = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const incrementHandler = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={decrementHandler}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={incrementHandler}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};
export default Counter;
