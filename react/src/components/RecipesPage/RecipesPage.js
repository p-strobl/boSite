import uuidv4 from "uuid/v4";
import React, { useEffect, useState } from "react";
import { useTitle } from "hookrouter";
import axios from "axios";

export const RecipesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const url = "http://localhost:5000/recipes";

  useTitle("Bo's Recipes");

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setData(result.data.collection);
        setLoading(false);
      })
      .catch((fetchedError) => {
        setError({
          message: fetchedError,
          state: true,
        });
      });
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <div key={uuidv4()}>
            <h1 key={uuidv4()}>{item.title}</h1>
            <p key={uuidv4()}>{item.infos.info}</p>
          </div>
        );
      })}
    </>
  );
};
