import React from "react";
import PropTypes from "prop-types";

import { AudioSampleBoxSamplesCategory } from "./AudioSampleBoxSamplesCategory";
import { AudioSampleBoxSamplesCollection } from "./AudioSampleBoxSamplesCollection";

import "./AudioSampleBoxSamplesWrapper.scss";

export const AudioSampleBoxSamplesWrapper = ({ category, samples, emoji }) => {
  const uiClasses = {
    audioSampleBoxSamplesWrapper: "AudioSampleBox__SamplesWrapper",
  };

  const noSamples = Object.values(samples).every((sample) => {
    return !sample.src;
  });

  if (noSamples) return null;

  return (
    <section className={uiClasses.audioSampleBoxSamplesWrapper}>
      <AudioSampleBoxSamplesCategory category={category} emoji={emoji} />
      <AudioSampleBoxSamplesCollection samples={samples} />
    </section>
  );
};

AudioSampleBoxSamplesWrapper.defaultProps = {
  category: "",
  emoji: "",
  samples: {},
};

AudioSampleBoxSamplesWrapper.propTypes = {
  category: PropTypes.string,
  emoji: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
};
