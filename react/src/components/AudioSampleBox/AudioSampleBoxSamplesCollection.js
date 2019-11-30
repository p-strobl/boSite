import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { Sample } from "./Sample";

import "./AudioSampleBoxSamplesCollection.scss";

export const AudioSampleBoxSamplesCollection = ({ samples }) => {
  const audioSamplesCollection = Object.values(samples).map((value) => {
    return <Sample title={value.title} audioSource={value.src} key={uuidv4()} />;
  });

  return <div className="Samples__Collection">{audioSamplesCollection}</div>;
};

AudioSampleBoxSamplesCollection.defaultProps = {
  samples: {},
};

AudioSampleBoxSamplesCollection.propTypes = {
  samples: PropTypes.objectOf(PropTypes.object),
};
