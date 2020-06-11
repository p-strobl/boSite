import React from "react";
import PropTypes from "prop-types";

import "./AudioSampleBoxSamplesCategory.scss";
import { Emoji } from "~components/Emoji";

export const AudioSampleBoxSamplesCategory = ({ category, emoji }) => {
  const uiClasses = {
    samplesCategory: "Samples__Category",
    samplesCategoryExpanded: "Samples__Category--Expanded",
    samplesCollectionExpanded: "Samples__Collection--Expanded",
    emoji: "Emoji",
  };

  const categoryEmoji = (
    <Emoji
      classs={`${uiClasses.samplesCategory}__`}
      emojiClass={`${uiClasses.emoji}__${emoji}`}
      label={emoji}
    />
  );

  const toggleSampleCategory = (element) => {
    if (typeof element === "undefined") return;

    const siblingSampleCollection = element.currentTarget.nextSibling;
    element.currentTarget.classList.toggle(uiClasses.samplesCategoryExpanded);
    siblingSampleCollection.classList.toggle(uiClasses.samplesCollectionExpanded);
  };

  return (
    <div
      className={uiClasses.samplesCategory}
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
  category: "",
  emoji: "",
};

AudioSampleBoxSamplesCategory.propTypes = {
  category: PropTypes.string,
  emoji: PropTypes.string,
};
