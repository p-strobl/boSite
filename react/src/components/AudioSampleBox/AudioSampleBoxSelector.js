import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./AudioSampleBoxSelector.scss";

export const AudioSampleBoxSelector = ({ category, samples }) => {
  console.log("title", category);
  console.log("samples", samples);
  // const audioSampleObject = Object.fromEntries(
  //   Object.entries(audioSampleData).filter(([key]) => key === selectValue),
  // );

  return (
    <div className="AudioSampleBoxSelector__Container">
      <div className="AudioSampleBoxSelector">
        <div>{category}</div>
        <div>Bla</div>
      </div>
    </div>
  );
};

AudioSampleBoxSelector.defaultProps = {
  category: PropTypes.string,
  samples: PropTypes.string,
};

AudioSampleBoxSelector.propTypes = {
  category: PropTypes.string,
  samples: PropTypes.string,
};
