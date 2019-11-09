import React from "react";
import Class from "classnames";

export const AudioSamplePlayer = ({ audioSrc }) => {
  return (
    <div className="AudioSamplePlayer__Container">
      <audio src={audioSrc} controls>
        <track kind="captions" />
      </audio>
    </div>
  );
};
