import { createContext } from "react";

import tissueCounter from "~server-assets/images/paper-counter.png";
import audioSampleBox from "~server-assets/images/equalizer.png";
import recipes from "~server-assets/images/recipes.jpg";

export default createContext({
  routes: {
    home: {
      emoji: "Heart",
      name: "home",
      path: "/",
      title: "Home",
      imageSrc: "",
    },
    tissueCounter: {
      emoji: "Tissue",
      name: "tissueCounter",
      path: "/tissue-counter",
      title: "Tissue Price Compare",
      imageSrc: tissueCounter,
    },
    audioSampleBox: {
      emoji: "Audio",
      name: "audioSampleBox",
      path: "/audio-sample-box",
      title: "Audio SampleCollection Box",
      imageSrc: audioSampleBox,
    },
    // },
    // recipes: {
    //   path: "/recipes",
    //   title: "Recipes",
    // },
  },
});
