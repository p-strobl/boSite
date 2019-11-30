import React from "react";
import PropTypes from "prop-types";

import { SampleTitle } from "./SampleTitle";
import { SamplePlayer } from "./Player";

import "./Sample.scss";

export const Sample = ({ title, audioSource }) => {
  return (
    <div className="Sample">
      <SampleTitle title={title} />
      <SamplePlayer audioSource={audioSource} />
    </div>
  );
};

Sample.defaultProps = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};

Sample.propTypes = {
  audioSource: PropTypes.string,
  title: PropTypes.string,
};
