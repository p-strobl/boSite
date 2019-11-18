import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./SamplePlayer.scss";

export const SamplePlayer = ({ audioSource }) => {
  const audioPlayer = new Audio(audioSource);
  const [audioDuration, setAudioDuration] = useState(null);
  const [audioCurrentTime, setAudioCurrentTime] = useState("0.00");

  const play = () => {
    const playIt = audioPlayer.play();
  };

  const stop = () => {
    const playIt = audioPlayer.stop();
  };

  const getDuration = () => {
    setAudioDuration(audioPlayer.duration.toFixed(2));
  };

  const updateCurrentTime = () => {
    audioPlayer.addEventListener("timeupdate", () => {
      setAudioCurrentTime(audioPlayer.currentTime.toFixed(2));
    });
  };

  useEffect(() => {
    audioPlayer.addEventListener("loadeddata", getDuration);
    updateCurrentTime();
    return () => {
      audioPlayer.removeEventListener("loadeddata", getDuration);
    };
  }, [getDuration]);

  return (
    <div className="Sample__Player" key={uuidv4()}>
      <div
        className="Sample__Player--Play-Pause Sample__Player--Control"
        role="button"
        onClick={play}
      />
      <div className="Sample__Player--Stop Sample__Player--Control" role="button" onClick={stop} />
      <div className="Sample__Player--CurrentTime">{audioCurrentTime}s</div>
      <span>/</span>
      <div className="Sample__Player--Duration">{audioDuration}s</div>
    </div>
  );
};

SamplePlayer.defaultProps = {
  audioSource: PropTypes.string,
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
};
