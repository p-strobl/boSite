import React from "react";

import AudioSampleBoxContextStore from "~context/AudioSampleContext";
import { AudioSampleBoxContainer } from "~components/AudioSampleBox/AudioSampleBoxContainer";

export const AudioSampleBoxProvider = () => {
  return (
    <AudioSampleBoxContextStore>
      <AudioSampleBoxContainer />
    </AudioSampleBoxContextStore>
  );
};
