import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./SamplePlayer.scss";

export const SamplePlayer = ({ audioSource }) => {
  const audioPlayer = new Audio(audioSource);

  const play = () => {
    const playIt = audioPlayer.play();
  };

  return (
    <div className="Sample__Player" key={uuidv4()}>
      <button type="button" onClick={play}>
        Play Button
      </button>
    </div>
  );
};

SamplePlayer.defaultProps = {
  audioSource: PropTypes.string,
};

SamplePlayer.propTypes = {
  audioSource: PropTypes.string,
};
