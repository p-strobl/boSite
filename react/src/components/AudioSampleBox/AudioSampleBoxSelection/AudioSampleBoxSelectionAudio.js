import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./AudioSampleBoxSelectionAudio.scss";

export const AudioSampleBoxSelectionAudio = ({ audioSource }) => {
  return (
    <div className="AudioSampleBoxSelection__Audio" key={uuidv4()}>
      <audio src={audioSource} controls />
    </div>
  );
};

AudioSampleBoxSelectionAudio.defaultProps = {
  audioSource: PropTypes.string,
};

AudioSampleBoxSelectionAudio.propTypes = {
  audioSource: PropTypes.string,
};
