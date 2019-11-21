import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./SamplePlayer.scss";
import Class from "classnames";

export const SamplePlayer = ({ audioSource }) => {
  const audioPlayer = new Audio(audioSource);

  const [hideControls, setHideControls] = useState(true);
  const [progressBar, setProgressBar] = useState(0);
  const [playButtonState, setPlayButtonState] = useState("Play");

  const showAudioPlayer = () => {
    setHideControls(false);
  };

  const togglePlay = () => {
    if (playButtonState === "Play") {
      audioPlayer.pause();
    } else {
      audioPlayer.play().then(setPlayButtonState("Pause"));
    }
  };

  audioPlayer.onended = () => {
    audioPlayer.currentTime = 0;
    setPlayButtonState("Play");
  };

  audioPlayer.ontimeupdate = () => {
    const { duration, currentTime } = audioPlayer;

    const progress = (currentTime * 100) / duration / 100;
    setProgressBar(progress.toFixed(2));
  };

  const initAudioPlayer = () => {
    if (typeof audioPlayer === "undefined") return false;

    audioPlayer.addEventListener("canplaythrough", showAudioPlayer);
    return true;
  };

  useEffect(() => {
    initAudioPlayer();

    return () => {
      audioPlayer.removeEventListener("canplaythrough", showAudioPlayer);
    };
  }, []);

  return (
    <div
      className={Class("Sample__Player", { "SamplePlayer--Loading": hideControls })}
      key={uuidv4()}>
      <div className="ProgressBar">
        <div
          className="ProgressBar--filler"
          style={{ transform: `scaleX(${progressBar})` }}
          key={uuidv4()}
        />
      </div>
      <div
        className={Class(`SamplePlayer__Control SamplePlayer__Control--${playButtonState}`)}
        role="button"
        onClick={togglePlay}
        onKeyUp={() => {}}
        tabIndex={0}
        aria-label="Play"
      />
    </div>
  );
};

SamplePlayer.defaultProps = {
  audioSource: PropTypes.string,
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
};
