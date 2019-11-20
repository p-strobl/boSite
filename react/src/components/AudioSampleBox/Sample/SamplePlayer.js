import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./SamplePlayer.scss";
import Class from "classnames";

export const SamplePlayer = ({ audioSource }) => {
  const audioPlayer = new Audio(audioSource);

  const [hideControls, setHideControls] = useState(true);
  const [audioDuration, setAudioDuration] = useState("0.0");
  const [audioCurrentTime, setAudioCurrentTime] = useState("0.0");

  const playPause = () => {
    const playIt = audioPlayer.play();
  };

  const showAudioPlayer = () => {
    setHideControls(false);
    setAudioDuration(audioPlayer.duration.toFixed(1));
  };

  const setCurrentPlaybackTime = () => {
    console.log("audioPlayer.currentTime", audioPlayer.currentTime);
    setAudioCurrentTime(audioPlayer.currentTime.toFixed(1));
  };

  const initCurrentPlaybackTime = () => {
    audioPlayer.addEventListener("timeupdate", setCurrentPlaybackTime);
  };

  const initAudioPlayer = () => {
    if (typeof audioPlayer === "undefined") return false;

    audioPlayer.addEventListener("canplaythrough", showAudioPlayer);
    return true;
  };

  // audioPlayer.ontimeupdate = () => {
  //   setCurrentPlaybackTime();
  // };
  initCurrentPlaybackTime();

  useEffect(() => {
    initAudioPlayer();

    return () => {
      audioPlayer.removeEventListener("canplaythrough", showAudioPlayer);
    };
  }, []);

  return (
    <div
      className={Class("Sample__Player", { "Sample__Player--Loading": hideControls })}
      key={uuidv4()}>
      <div className="Sample__PlayerControl" role="button" onClick={playPause} />
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
