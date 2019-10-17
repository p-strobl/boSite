import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./Emoji.scss";

export function Emoji({ classs, emojiClass, label }) {
  return (
    <span
      className={Class(
        {
          [`${classs}Emoji`]: classs.length > 0,
          [`${emojiClass}`]: classs.length > 0,
        },
        "Emoji",
      )}
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    />
  );
}

Emoji.defaultProps = {
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  emojiClass: PropTypes.string,
  label: PropTypes.string,
};

Emoji.propTypes = {
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  emojiClass: PropTypes.string,
  label: PropTypes.string,
};
