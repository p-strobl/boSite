import React, { useContext } from "react";
import uuidv4 from "uuid/v4";

import { AudioSampleBoxContext } from "~context/AudioSampleContext";
import { Samples } from "./Samples";

import "./SamplesList.scss";

export const SamplesList = () => {
  const audioSampleData = useContext(AudioSampleBoxContext);

  const sampleList = Object.values(audioSampleData).map((value) => {
    return <Samples category={value.category} samples={value.samples} key={uuidv4()} />;
  });

  return <div className="Samples__List">{sampleList}</div>;
};
