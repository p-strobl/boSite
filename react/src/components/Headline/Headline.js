import React from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./Headline.scss";

export function Headline({ parentClass, h1, h2 }) {
  const uiClasses = {
    headline: "Headline",
    headlineContainer: "Headline__Container",
    parentHeadline: `${parentClass}__Headline`,
    parentHeadlineContainer: `${parentClass}__HeadlineContainer`,
  };

  return (
    <div
      className={Class(uiClasses.headline, {
        [uiClasses.parentHeadline]: parentClass.length > 0,
      })}>
      <div
        className={Class(uiClasses.headlineContainer, {
          [uiClasses.parentHeadlineContainer]: parentClass.length > 0,
        })}>
        {h1}
        {h2}
      </div>
    </div>
  );
}

Headline.defaultProps = {
  parentClass: "",
  h1: "",
  h2: "",
};

Headline.propTypes = {
  parentClass: PropTypes.string,
  h1: PropTypes.node,
  h2: PropTypes.node,
};
