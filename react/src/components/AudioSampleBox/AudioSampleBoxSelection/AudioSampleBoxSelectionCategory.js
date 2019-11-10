import React from "react";
import PropTypes from "prop-types";

import "./AudioSampleBoxSelectionCategory.scss";

export const AudioSampleBoxSelectionCategory = ({ category }) => {
  return (
    <div className="AudioSampleBoxSelection__Category">
      <div>{category}</div>
    </div>
  );
};

AudioSampleBoxSelectionCategory.defaultProps = {
  category: PropTypes.string,
};

AudioSampleBoxSelectionCategory.propTypes = {
  category: PropTypes.string,
};
