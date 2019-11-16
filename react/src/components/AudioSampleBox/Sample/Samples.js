import React from "react";
import PropTypes from "prop-types";

import { SampleCategory } from "./SampleCategory";
import { Sample } from "./Sample";

import "./Samples.scss";

export const Samples = ({ category, samples }) => {
  const noSamples = Object.values(samples).every((sample) => {
    return !sample.src;
  });

  if (noSamples) return null;

  return (
    <div className="Samples">
      <SampleCategory category={category} />
      <Sample samples={samples} />
    </div>
  );
};

Samples.defaultProps = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
};

Samples.propTypes = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
};
