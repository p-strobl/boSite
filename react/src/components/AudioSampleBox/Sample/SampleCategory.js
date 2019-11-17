import React from "react";
import PropTypes from "prop-types";

import "./SampleCategory.scss";
import { Emoji } from "~components/Emoji";

export const SampleCategory = ({ category, emoji }) => {
  const categoryEmoji = (
    <Emoji classs="SampleCategory__" emojiClass={`Emoji__${emoji}`} label={emoji} />
  );

  const expandSampleList = (element) => {
    const siblingSampleList = element.currentTarget.nextSibling;
    element.currentTarget.classList.toggle("Sample__Category--Expanded");
    siblingSampleList.classList.toggle("Sample__List--Expanded");
  };

  return (
    <div
      className="Sample__Category"
      onClick={expandSampleList}
      onKeyUp={() => expandSampleList}
      role="button"
      tabIndex={0}>
      <div>{category}</div>
      {categoryEmoji}
    </div>
  );
};

SampleCategory.defaultProps = {
  category: PropTypes.string,
  emoji: PropTypes.string,
};

SampleCategory.propTypes = {
  category: PropTypes.string,
  emoji: PropTypes.string,
};
