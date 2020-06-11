import React from "react";

import "./AudioSampleBoxSamplesDisclaimer.scss";

export const AudioSampleBoxSamplesDisclaimer = () => {
  const linkContent = {
    href: "https://www.zapsplat.com",
    rel: "noopener noreferrer",
    target: "_blank",
  };

  const uiClasses = {
    samplesDisclaimer: "Samples__Disclaimer",
    samplesDisclaimerWrapper: "Samples__DisclaimerWrapper",
    samplesDisclaimerLink: "Samples__DisclaimerLink",
    samplesDisclaimerBorder: "Samples__DisclaimerBorder",
  };

  const link = (
    <a
      className={uiClasses.samplesDisclaimerWrapper}
      href={linkContent.href}
      rel={linkContent.rel}
      target={linkContent.target}>
      <span className={uiClasses.samplesDisclaimerLink}>www.zapsplat.com</span>
      <span className={uiClasses.samplesDisclaimerBorder} />
    </a>
  );

  return <div className={uiClasses.samplesDisclaimer}>Sound effects obtained from {link}</div>;
};
