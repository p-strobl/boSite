import React from "react";

import AudioSampleBoxContextStore from "~context/AudioSampleContext";
import { AudioSampleBoxSelection } from "~components/AudioSampleBox/AudioSampleBoxSelection";

export const AudioSampleBoxProvider = () => {
  return (
    <AudioSampleBoxContextStore>
      <AudioSampleBoxSelection />
    </AudioSampleBoxContextStore>
  );
};
