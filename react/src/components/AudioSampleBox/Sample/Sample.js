import React from "react";
import PropTypes from "prop-types";

import { SamplePlayer } from "./Player";

import "./Sample.scss";

export const Sample = ({ title, audioSource }) => {
  return (
    <div className="Sample">
      <SamplePlayer audioSource={audioSource} title={title} />
    </div>
  );
};

Sample.defaultProps = {
  audioSource: "",
  title: "",
};

Sample.propTypes = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};
