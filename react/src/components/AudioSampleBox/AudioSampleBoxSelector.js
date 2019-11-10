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
    <div className="AudioSampleBoxSelector">
      <div className="AudioSampleBoxSelector__Container">
        <div>{category}</div>
        <div>Bla</div>
      </div>
    </div>
  );
};
