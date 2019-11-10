import React, { useContext, useState, useEffect } from "react";
import uuidv4 from "uuid/v4";

import { AudioSampleBoxContext } from "~context/AudioSampleContext";

import { AudioSampleBoxSelector } from "./AudioSampleBoxSelector";
import { AudioSampleBoxPlayerControl } from "./AudioSampleBoxPlayerControl";

import "./AudioSampleBoxContainer.scss";

export const AudioSampleBoxContainer = () => {
  const [audioSrcPath, setAudioSrcPath] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  const audioSampleData = useContext(AudioSampleBoxContext);

  const audioSampleBoxSelector = Object.values(audioSampleData).map((value) => {
    return <AudioSampleBoxSelector category={value.category} samples={value.samples} key={uuidv4()} />;
  });

  return (
    <div className="AudioSampleBox__Container">
      {audioSampleBoxSelector}
      <AudioSampleBoxPlayerControl />
    </div>
  );
};
