import React, { useContext, useState, useEffect } from "react";

import { AudioSample } from "~assets/audio/samples";
import { AudioSampleBoxContext } from "~context/AudioSampleContext";
import { AudioSamplePlayer } from "./AudioSamplePlayer";

import "./AudioSampleBoxSelection.scss";

export const AudioSampleBoxSelection = () => {
  const [audioSampleFiles, setAudioSampleFiles] = useState();
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [audioSrcPath, setAudioSrcPath] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  const audioSampleContext = useContext(AudioSampleBoxContext);

  const chooseCategory = (option) => {
    const selectValue = option.target.value;

    const foundAudioSamples = Object.entries(AudioSample).forEach(([key, value]) => {
      console.log("key", key);
      console.log("value", value);
    });

    switch (option.target.value) {
      case "kitchen":
        setAudioSrcPath(AudioSample.kitchen.blender);
        setShowPlayer(true);
        break;
      case "household":
        setAudioSrcPath(AudioSample.kitchen.kettle);
        setShowPlayer(true);
        break;
      default:
        setAudioPlayer(null);
        setShowPlayer(false);
    }
  };

  return (
    <div className="AudioSampleBox__Container">
      <select name="samples" onChange={chooseCategory}>
        <option value="">--Bitte wählen Sie eine Audio Kategorie--</option>
        <option value="kitchen">Küche</option>
        <option value="household">Haushalt</option>
      </select>
      <div className="AudioSampleBox__OutputContainer">
        {showPlayer && <AudioSamplePlayer audioSrc={audioSrcPath} />}
      </div>
    </div>
  );
};
