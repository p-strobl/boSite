import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import { AudioSampleBoxSelectionCategory } from "./AudioSampleBoxSelectionCategory";
import { AudioSampleBoxSelectionSampleList } from "./AudioSampleBoxSelectionSampleList";

import "./AudioSampleBoxSelection.scss";

export const AudioSampleBoxSelection = ({ category, samples }) => {
  return (
    <div className="AudioSampleBoxSelection__Container">
      <AudioSampleBoxSelectionCategory category={category} />
      <AudioSampleBoxSelectionSampleList samples={samples} />
    </div>
  );
};

AudioSampleBoxSelection.defaultProps = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
};

AudioSampleBoxSelection.propTypes = {
  category: PropTypes.string,
  samples: PropTypes.objectOf(PropTypes.object),
};
