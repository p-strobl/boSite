import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { AudioSampleBoxSelectionTitle } from "./AudioSampleBoxSelectionTitle";
import { AudioSampleBoxSelectionAudio } from "./AudioSampleBoxSelectionAudio";

import "./AudioSampleBoxSelectionSampleList.scss";

export const AudioSampleBoxSelectionSampleList = ({ samples }) => {
  const audioSampleList = Object.values(samples).map((value) => {
    if (value.src.length === 0) return false;

    return (
      <div className="AudioSampleBoxSelection__Sample" key={uuidv4()}>
        <AudioSampleBoxSelectionTitle title={value.title} />
        <AudioSampleBoxSelectionAudio audioSource={value.src} />
      </div>
    );
  });

  return <div className="AudioSampleBoxSelection__SampleList">{audioSampleList}</div>;
};

AudioSampleBoxSelectionSampleList.defaultProps = {
  samples: PropTypes.objectOf(PropTypes.object),
};

AudioSampleBoxSelectionSampleList.propTypes = {
  samples: PropTypes.objectOf(PropTypes.object),
};
