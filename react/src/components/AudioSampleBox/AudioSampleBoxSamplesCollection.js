import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import { AudioSample } from "./AudioSample";
import { AudioSampleBoxSamplesDisclaimer } from "./AudioSampleBoxSamplesDisclaimer";

import "./AudioSampleBoxSamplesCollection.scss";

export const AudioSampleBoxSamplesCollection = ({ samples }) => {
  const uiClasses = {
    samplesCollection: "Samples__Collection",
  };

  const AudioSamplesCollection = Object.values(samples).map((value) => {
    if (value.src.length === 0) return false;

    return <AudioSample title={value.title} audioSource={value.src} key={uuid()} />;
  });

  if (AudioSamplesCollection) {
    return (
      <div className={uiClasses.samplesCollection}>
        {AudioSamplesCollection}
        <AudioSampleBoxSamplesDisclaimer />
      </div>
    );
  }
};

AudioSampleBoxSamplesCollection.defaultProps = {
  samples: {},
};

AudioSampleBoxSamplesCollection.propTypes = {
  samples: PropTypes.objectOf(PropTypes.object),
};
