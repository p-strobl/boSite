import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from '@use-hooks/axios';
import styles from './App.scss';

export default function App() {

  const url = 'http://localhost:5000/recipes';
  const [recipes, setRecipes] = useState({ recipes: [] });

  useEffect(() => {
    const { response, loading, error } = useAxios({
      url,
      method: 'GET',
      options: {
        params: { recipes },
      },
      trigger: recipes
    });

    setRecipes({
      data: response,
      isLoading: loading,
      error
    });
  });
  console.log('state', recipes);

  return (
    <div className={styles.bla} key={1}>
      <p>This a { recipes.data }</p>
    </div>
  );
}
