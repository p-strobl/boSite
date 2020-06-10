import uuid from "uuid/v4";
import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A, usePath } from "hookrouter";

import { capitalizeFirstLetter } from "~src/helper/Utilities";

import "./NavigationLink.scss";

export function NavigationLink({ linkList, routePath, routeTitle }) {
  const currentPath = usePath();
  const uiClasses = {
    navigationLinkList: "Navigation__LinkList",
    navigationLinkListActive: "Navigation__LinkList--Active",
    navigationLink: "Navigation__Link",
  };
  
  return (
    <div
      className={Class(`${uiClasses.navigationLinkList} ${uiClasses.navigationLinkList}--${capitalizeFirstLetter(linkList)}`, {
        [`${uiClasses.navigationLinkListActive}`]: currentPath === routePath,
      })}
      key={uuid()}>
      <A
        className={Class(`${uiClasses.navigationLink} ${uiClasses.navigationLink}--${capitalizeFirstLetter(linkList)}`)}
        href={routePath}
        title={routeTitle}
        key={uuid()}
      />
    </div>
  );
}

NavigationLink.defaultProps = {
  linkList: "",
  routePath: "",
  routeTitle: "",
};

NavigationLink.propTypes = {
  linkList: PropTypes.string,
  routePath: PropTypes.string,
  routeTitle: PropTypes.string,
};
