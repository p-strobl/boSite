import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { Sample } from "./Sample";

import "./SampleList.scss";

export const SampleList = ({ samples }) => {
  const audioSampleList = Object.values(samples).map((value) => {
    return <Sample title={value.title} audioSource={value.src} key={uuidv4()} />;
  });

  return <div className="Sample__List">{audioSampleList}</div>;
};

SampleList.defaultProps = {
  samples: PropTypes.objectOf(PropTypes.object),
};

SampleList.propTypes = {
  samples: PropTypes.objectOf(PropTypes.object),
};
