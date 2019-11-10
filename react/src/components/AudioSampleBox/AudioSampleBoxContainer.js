import React, { useContext } from "react";
import uuidv4 from "uuid/v4";

import { AudioSampleBoxContext } from "~context/AudioSampleContext";

import { AudioSampleBoxSelection } from "./AudioSampleBoxSelection/AudioSampleBoxSelection";
import { AudioSampleBoxPlayerControl } from "./AudioSampleBoxPlayerControl";

import "./AudioSampleBoxContainer.scss";

export const AudioSampleBoxContainer = () => {
  const audioSampleData = useContext(AudioSampleBoxContext);

  const audioSampleBoxSelector = Object.values(audioSampleData).map((value) => {
    return <AudioSampleBoxSelection category={value.category} samples={value.samples} key={uuidv4()} />;
  });

  return (
    <div className="AudioSampleBox__Container">
      {audioSampleBoxSelector}
      <AudioSampleBoxPlayerControl />
    </div>
  );
};
