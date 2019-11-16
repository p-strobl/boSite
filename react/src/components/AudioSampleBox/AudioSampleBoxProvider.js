import React from "react";

import AudioSampleBoxContextStore from "~context/AudioSampleContext";

import { SamplesList } from "./Sample/SamplesList";

export const AudioSampleBoxProvider = () => {
  return (
    <AudioSampleBoxContextStore>
      <SamplesList />
    </AudioSampleBoxContextStore>
  );
};
