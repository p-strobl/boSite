import React from "react";
import PropTypes from "prop-types";

import { Player } from "./Player";

import "./AudioSample.scss";

export const AudioSample = ({ title, audioSource }) => {
  const uiClasses = {
    sample: "Sample",
  };

  return (
    <div className={uiClasses.sample}>
      <Player audioSource={audioSource} title={title} />
    </div>
  );
};

AudioSample.defaultProps = {
  audioSource: "",
  title: "",
};

AudioSample.propTypes = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};
