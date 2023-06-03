import React from 'react';
import { Button } from '@mui/material';

import styles from './Homepage.module.scss'

function Homepage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Title}>
        DEMO ZUSTAND
      </div>

      <div className={styles.ButtonContainer}>
        <Button
          className={styles.Button}
          variant='contained'
          href='/counter-number'
        >
          Bộ đếm số
        </Button>

        <Button
          className={styles.Button}
          variant='contained'
        >
          Todo List
        </Button>
      </div>
    </div>
  )
}

export default Homepage;
