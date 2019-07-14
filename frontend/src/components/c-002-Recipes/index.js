import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Recipes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const url = "http://localhost:5000/recipes";

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        console.log("result", result);
        setData(result);
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
      <div>Recipes</div>
    </>
  );
}
