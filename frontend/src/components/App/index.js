import React from "react";
// import axios from "axios";
// import styles from "./App.scss";
import Routes from "../Routes";

export default function App() {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState({
  //     message: "",
  //     state: false,
  //   });

  // const url = "http://localhost:5000/recipes";

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((result) => {
  //       console.log("result", result);
  //       setData(result);
  //       setLoading(false);
  //     })
  //     .then((fetchedError) => {
  //       setError({
  //         message: fetchedError,
  //         state: true,
  //       });
  //     });
  // }, []);

  // const handleClick = (event) => {
  //   console.log("Fetched", error.state);
  // };

  return <Routes />;
}
