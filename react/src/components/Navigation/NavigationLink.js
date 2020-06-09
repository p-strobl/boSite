import uuidv4 from "uuid/v4";
import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A, usePath } from "hookrouter";

import { capitalizeFirstLetter } from "~src/helper/Utilities";

import "./NavigationLink.scss";

export function NavigationLink({ linkList, routePath, routeTitle }) {
  const currentPath = usePath();
  return (
    <div
      className={Class(`Navigation__LinkList Navigation__LinkList--${capitalizeFirstLetter(linkList)}`, {
        "Navigation__LinkList--Active": currentPath === routePath,
      })}
      key={uuidv4()}>
      <A
        className={Class(`Navigation__Link Navigation__Link--${capitalizeFirstLetter(linkList)}`)}
        href={routePath}
        title={routeTitle}
        key={uuidv4()}
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
