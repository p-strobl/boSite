import React from "react";

import AudioSampleBoxContextStore from "~context/AudioSampleContext";

import { AudioSampleBoxContent } from "./AudioSampleBoxContent";

export const AudioSampleBoxProvider = () => {
  return (
    <AudioSampleBoxContextStore>
      <AudioSampleBoxContent />
    </AudioSampleBoxContextStore>
  );
};
