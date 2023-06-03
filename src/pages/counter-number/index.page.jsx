import React from 'react';
import { useCounterStore } from 'stores/createStore';
import { Button } from '@mui/material';


import styles from './Counter.module.scss';

function Counter() {
  const counterValue = useCounterStore((state) => state.number);

  const onClickIncreaseNumber = useCounterStore((state) => state.increaseNumber);

  const onClickDecreaseNumber = useCounterStore((state) => state.decreaseNumber);

  const onClickResetNumber = useCounterStore((state) => state.resetNumber);

  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <div className={styles.Title}>
          Counter Number:
        </div>

        <div className={styles.ButtonContainer}>
          <Button
            className={styles.Button}
            variant='outlined'
            onClick={onClickDecreaseNumber}
          >
            -
          </Button>

          <div className={styles.CounterValue}>
            {counterValue}
          </div>

          <Button
            className={styles.Button}
            variant='outlined'
            onClick={onClickIncreaseNumber}
          >
            +
          </Button>
        </div>

        <div className={styles.ButtonContainer}>
          <Button
            className={styles.Button}
            variant='outlined'
            disabled={counterValue === 0}
            onClick={onClickResetNumber}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
