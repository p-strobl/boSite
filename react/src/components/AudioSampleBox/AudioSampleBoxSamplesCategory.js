import React from "react";
import PropTypes from "prop-types";

import "./AudioSampleBoxSamplesCategory.scss";
import { Emoji } from "~components/Emoji";

export const AudioSampleBoxSamplesCategory = ({ category, emoji }) => {
  const categoryEmoji = (
    <Emoji classs="SamplesCategory__" emojiClass={`Emoji__${emoji}`} label={emoji} />
  );

  const toggleSampleCategory = (element) => {
    if (typeof element === "undefined") return;

    const siblingSampleCollection = element.currentTarget.nextSibling;
    element.currentTarget.classList.toggle("Samples__Category--Expanded");
    siblingSampleCollection.classList.toggle("Samples__Collection--Expanded");
  };

  return (
    <div
      className="Samples__Category"
      onClick={toggleSampleCategory}
      onKeyUp={() => toggleSampleCategory}
      role="button"
      tabIndex={0}>
      <div>{category}</div>
      {categoryEmoji}
    </div>
  );
};

AudioSampleBoxSamplesCategory.defaultProps = {
  category: PropTypes.string,
  emoji: PropTypes.string,
};

AudioSampleBoxSamplesCategory.propTypes = {
  category: PropTypes.string,
  emoji: PropTypes.string,
};
