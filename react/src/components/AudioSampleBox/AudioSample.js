import React from "react";
import PropTypes from "prop-types";

import { Player } from "./Player";

import "./AudioSample.scss";

export const AudioSample = ({ title, audioSource }) => {
  return (
    <div className="Sample">
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
