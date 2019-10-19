import { createContext } from "react";

export default createContext({
  routes: {
    home: {
      path: "/",
      title: "Home",
    },
    tissueCounter: {
      path: "/tissue-counter",
      title: "Tissue Price Compare",
    },
    recipes: {
      path: "/recipes",
      title: "Recipes",
    },
  },
});
