import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

export function Emoji(props) {
  const { label, symbol, classs } = props;

  return (
    <span
      className={Class(`Emoji ${classs || ""}`)}
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}>
      {symbol}
    </span>
  );
}

Emoji.defaultProps = {
  label: PropTypes.string,
  symbol: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string,
  classs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
