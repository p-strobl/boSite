import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.scss';

export default function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get('/recipes')
      .then((response) => {
        setState(...response);
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        // always executed
        console.log('finally');
      });
  });

  console.log('state', state);
  return (
    <div className={styles.bla} key={1}>
      {state}
    </div>
  );
}
