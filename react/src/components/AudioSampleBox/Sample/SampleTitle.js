import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./SampleTitle.scss";

export const SampleTitle = ({ title }) => {
  return (
    <div className="Sample__Title" key={uuidv4()}>
      <div>{title}</div>
    </div>
  );
};

SampleTitle.defaultProps = {
  title: "",
};

SampleTitle.propTypes = {
  title: PropTypes.string,
};
