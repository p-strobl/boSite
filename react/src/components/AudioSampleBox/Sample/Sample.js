import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import { SampleTitle } from "./SampleTitle";
import { SamplePlayer } from "./SamplePlayer";

import "./Sample.scss";

export const Sample = ({ samples }) => {
  const audioSampleList = Object.values(samples).map((value) => {
    return (
      <div className="Sample" key={uuidv4()}>
        <SampleTitle title={value.title} />
        <SamplePlayer audioSource={value.src} />
      </div>
    );
  });

  return <div className="Sample__List">{audioSampleList}</div>;
};

Sample.defaultProps = {
  samples: PropTypes.objectOf(PropTypes.object),
};

Sample.propTypes = {
  samples: PropTypes.objectOf(PropTypes.object),
};
