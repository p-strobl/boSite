import { createContext } from "react";

export default createContext({
  routes: {
    home: {
      path: "/",
      title: "boSite Home",
    },
    tissueCounter: {
      path: "/tissue-counter",
      title: "Tissue Price Compare",
    },
    recipes: {
      path: "/recipes",
      title: "boSite's Recipes",
    },
  },
});
