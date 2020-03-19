import React, { useState, useEffect, useRef } from 'react';

import styles from './CowsAndBulls.css';

import Button from 'Atoms/Button/Button';
import Text from 'Atoms/Text/Text';

import { createNum } from './util';

const CowsAndBulls = () => {
  const [completed, setCompleted] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [resultNumber, setResultNumber] = useState(createNum());

  const inputEl = useRef<HTMLInputElement>(null);

  let resultText: string;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      validateResult();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return document.removeEventListener('keydown', handleKeyDown);
  }, [])


  const validateResult = () => {
    if (!inputEl || inputEl.current || !inputEl.current.value) return;
    const { value } = inputEl.current;

    if (value.length !== 4) return;

    if (value === resultText) {
      setCompleted(true);
      setAttempts([]);
    } else {
      let cows = 0;
      let bulls = 0;

      const nums = value.split('');

      for (let i = 0; i < nums.length; i++) {
        const currentNum = parseInt(nums[i]);
        if (currentNum === resultNumber[i]) {
          bulls++;
        } else {
          if (resultNumber.includes(currentNum)) {
            cows++;
          }
        }
      }
      setAttempts([...attempts, { value, matching: `${cows} cows, ${bulls} bulls` }]);
    }

    inputEl.current.value = '';
  }

  const createAttempts = attempts.map((item, index) => {
    const { value, matching } = item;
    const text = `${value} - ${matching}`;
    return <Text tag="h3" key={index} text={text} />;
  });

  const completedView = (
    <div>
      <Text tag="h1">Congratulations!</Text>
      <Button>Retry</Button>
    </div>
  );

  const gameView = (
    <div>
      {createAttempts}
      <input
        ref={inputEl}
        className={styles.input}
        type="number"
        maxLength={4}
      />
    </div>
  );

  return (
    <div className={styles.cowsGame}>
      {completed ? completedView : gameView}
    </div>
  );
}

export default CowsAndBulls;