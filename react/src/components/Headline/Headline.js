import React from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./Headline.scss";

export function Headline({ parentClass, h1, h2, emoji }) {
  return (
    <div
      className={Class(
        {
          [`${parentClass}__Headline`]: parentClass.length > 0,
        },
        "Headline",
      )}>
      <div
        className={Class(
          {
            [`${parentClass}__HeadlineContainer`]: parentClass.length > 0,
          },
          "Headline__Container",
        )}>
        <h1>{h1}</h1>
        <h2>
          {h2}
          {emoji || ""}
        </h2>
      </div>
    </div>
  );
}

Headline.defaultProps = {
  parentClass: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  emoji: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Headline.propTypes = {
  parentClass: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  emoji: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
