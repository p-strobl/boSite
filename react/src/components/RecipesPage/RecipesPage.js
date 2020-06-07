import uuid from "uuid/v4";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTitle } from "hookrouter";

export const RecipesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const recipesApiRoute = "/api/recipes";

  useTitle("boSite's Rezepte");

  useEffect(() => {
    axios
      .get(recipesApiRoute)
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
      <h1>Recipes Site</h1>
      {data.map((item) => {
        return (
          <div key={uuid()}>
            <h1 key={uuid()}>{item.title}</h1>
            <p key={uuid()}>{item.infos.info}</p>
          </div>
        );
      })}
    </>
  );
};
