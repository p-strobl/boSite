import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

export function Emoji({ label, emoji, classs }) {
  return (
    <span
      className={Class(`Emoji ${classs || ""}`)}
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
