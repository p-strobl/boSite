import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./Title.scss";

export const Title = ({ title }) => {
  return (
    <div className="Sample__Title" key={uuidv4()}>
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
