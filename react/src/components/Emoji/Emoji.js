import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./Emoji.scss";

export function Emoji({ classs, emojiClass, label }) {
  const uiClasses = {
    emoji: "Emoji",
  };

  return (
    <span
      className={Class(
        {
          [`${classs}${uiClasses.emoji}`]: classs.length > 0,
          [`${emojiClass}`]: classs.length > 0,
        },
        uiClasses.emoji,
      )}
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    />
  );
}

Emoji.defaultProps = {
  classs: "",
  emojiClass: "",
  label: "",
};

Emoji.propTypes = {
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  emojiClass: PropTypes.string,
  label: PropTypes.string,
};
