import React from "react";
import PropTypes from "prop-types";

import { AudioSampleBoxSamplesCategory } from "./AudioSampleBoxSamplesCategory";
import { AudioSampleBoxSamplesCollection } from "./AudioSampleBoxSamplesCollection";

import "./AudioSampleBoxSamplesWrapper.scss";

export const AudioSampleBoxSamplesWrapper = ({ category, samples, emoji }) => {
  const noSamples = Object.values(samples).every((sample) => {
    return !sample.src;
  });

  if (noSamples) return null;

  return (
    <div className="AudioSampleBox__SamplesWrapper">
      <AudioSampleBoxSamplesCategory category={category} emoji={emoji} />
      <AudioSampleBoxSamplesCollection samples={samples} />
    </div>
  );
};

AudioSampleBoxSamplesWrapper.defaultProps = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
  emoji: PropTypes.string,
};

AudioSampleBoxSamplesWrapper.propTypes = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
  emoji: PropTypes.string,
};
