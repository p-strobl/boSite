import React from "react";

import "./AudioSampleBoxSamplesDisclaimer.scss";

export const AudioSampleBoxSamplesDisclaimer = () => {
  const link = (
    <a
      className="Samples__DisclaimerWrapper"
      href="https://www.zapsplat.com"
      rel="noopener noreferrer"
      target="_blank">
      <span className="Samples__DisclaimerLink">www.zapsplat.com</span>
      <span className="Samples__Disclaimer--Border"></span>
    </a>
  );
  return <div className="Samples__Disclaimer">Sound effects obtained from {link}</div>;
};
