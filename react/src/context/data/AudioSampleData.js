import { AudioSample } from "~assets/audio/samples/index";

export const AudioSampleData = {
  bathroom: {
    category: "Badezimmer",
    emoji: "bathtub",
    samples: {
      toilet: {
        src: AudioSample.kitchen.blender,
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
    emoji: "FriedEgg",
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
  tools: {
    category: "Werkzeug",
    emoji: "HammerWrench",
    samples: {
      blender: {
        src: AudioSample.kitchen.blender,
        title: "Hammer",
      },
      kettle: {
        src: AudioSample.kitchen.kettle,
        title: "Säge",
      },
      toaster: {
        src: AudioSample.kitchen.toaster,
        title: "Nagel",
      },
    },
  },
};
