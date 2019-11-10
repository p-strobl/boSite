import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./AudioSampleBoxSelectionTitle.scss";

export const AudioSampleBoxSelectionTitle = ({ title }) => {
  return (
    <div className="AudioSampleBoxSelection__Title" key={uuidv4()}>
      <div>{title}</div>
    </div>
  );
};

AudioSampleBoxSelectionTitle.defaultProps = {
  title: PropTypes.string,
};

AudioSampleBoxSelectionTitle.propTypes = {
  title: PropTypes.string,
};
