import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import "./Title.scss";

export const Title = ({ title }) => {
  const uiClasses = {
    sampleTitle: "Sample__Title",
  };

  return (
    <div className={uiClasses.sampleTitle} key={uuid()}>
      <div>{title}</div>
    </div>
  );
};

Title.defaultProps = {
  title: "",
};

Title.propTypes = {
  title: PropTypes.string,
};
