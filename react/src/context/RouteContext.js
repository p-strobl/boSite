import { createContext } from "react";

export default createContext({
  routes: {
    home: {
      emoji: "Heart",
      name: "home",
      path: "/",
      title: "Home",
    },
    tissueCounter: {
      emoji: "Tissue",
      name: "tissueCounter",
      path: "/tissue-counter",
      title: "Tissue Price Compare",
    },
    audioSampleBox: {
      emoji: "Audio",
      name: "audioSampleBox",
      path: "/audio-sample-box",
      title: "Audio Sample Box",
    },
    // },
    // recipes: {
    //   path: "/recipes",
    //   title: "Recipes",
    // },
  },
});
