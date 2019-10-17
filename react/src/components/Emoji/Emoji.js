import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

export function Emoji({ classs, emoji, label }) {
  return (
    <span
      className={Class(
        {
          [`${classs}Emoji Emoji`]: classs.length > 0,
        },
        "Emoji",
      )}
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}>
      {emoji}
    </span>
  );
}

Emoji.defaultProps = {
  label: PropTypes.string,
  emoji: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Emoji.propTypes = {
  label: PropTypes.string,
  emoji: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
