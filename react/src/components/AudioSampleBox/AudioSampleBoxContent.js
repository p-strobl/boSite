import React, { useContext } from "react";
import uuidv4 from "uuid/v4";

import { AudioSampleBoxContext } from "~context/AudioSampleContext";
import { AudioSampleBoxSamplesWrapper } from "./AudioSampleBoxSamplesWrapper";

import "./AudioSampleBoxContent.scss";

export const AudioSampleBoxContent = () => {
  const uiClasses = {
    audioSampleBoxContent: "AudioSampleBox__Content",
  };

  const audioSampleData = useContext(AudioSampleBoxContext);

  const audioSampleContent = Object.values(audioSampleData).map((value) => {
    return (
      <AudioSampleBoxSamplesWrapper
        category={value.category}
        samples={value.samples}
        emoji={value.emoji}
        key={uuidv4()}
      />
    );
  });

  return <div className={uiClasses.audioSampleBoxContent}>{audioSampleContent}</div>;
};
