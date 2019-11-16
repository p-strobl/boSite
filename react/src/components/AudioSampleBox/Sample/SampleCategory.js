import React from "react";
import PropTypes from "prop-types";

import "./SampleCategory.scss";

export const SampleCategory = ({ category }) => {
  const expandSampleList = (element) => {
    console.log("currentTarget", element.currentTarget);
    console.log("target", element.target);
  };

  return (
    <div className="Sample__Category" onClick={expandSampleList} role="button" tabIndex={0}>
      <div>{category}</div>
    </div>
  );
};

SampleCategory.defaultProps = {
  category: PropTypes.string,
};

SampleCategory.propTypes = {
  category: PropTypes.string,
};
