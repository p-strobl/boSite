import { AudioSample } from "~assets/audio/samples/index";

export const AudioSampleData = {
  bathroom: {
    category: "Badezimmer",
    samples: {
      toilet: {
        src: "",
        title: "Toilet",
      },
      shower: {
        src: "",
        title: "Shower",
      },
      toothbrush: {
        src: "",
        title: "Toothbrush",
      },
    },
  },
  kitchen: {
    category: "Küche",
    samples: {
      blender: {
        src: AudioSample.kitchen.blender,
        title: "Mixer",
      },
      kettle: {
        src: AudioSample.kitchen.kettle,
        title: "Kettle",
      },
      toaster: {
        src: AudioSample.kitchen.toaster,
        title: "Toaster",
      },
    },
  },
};
