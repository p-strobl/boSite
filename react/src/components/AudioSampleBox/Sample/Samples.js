import React from "react";
import PropTypes from "prop-types";

import { SampleCategory } from "./SampleCategory";
import { SampleList } from "./SampleList";

import "./Samples.scss";

export const Samples = ({ category, samples, emoji }) => {
  const noSamples = Object.values(samples).every((sample) => {
    return !sample.src;
  });

  if (noSamples) return null;

  return (
    <div className="Samples">
      <SampleCategory category={category} emoji={emoji} />
      <SampleList samples={samples} />
    </div>
  );
};

Samples.defaultProps = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
  emoji: PropTypes.string,
};

Samples.propTypes = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
  emoji: PropTypes.string,
};
