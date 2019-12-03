import React from "react";

import "./AudioSampleBoxSamplesDisclaimer.scss";

export const AudioSampleBoxSamplesDisclaimer = () => {
  const link = (
    <a
      className="Samples__Disclaimer--Link"
      href="https://www.zapsplat.com"
      rel="noopener noreferrer"
      target="_blank">
      www.zapsplat.com
    </a>
  );
  return <div className="Samples__Disclaimer">Sound effects obtained from {link}</div>;
};
