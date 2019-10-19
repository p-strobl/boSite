import uuidv4 from "uuid/v4";
import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A, usePath } from "hookrouter";

import { capitalizeFirstLetter } from "~src/helper/Utilities";

import "./HeaderLink.scss";

export function HeaderLink({ linkList, routePath, routeTitle }) {
  const currentPath = usePath();
  return (
    <div
      className={Class(`Header__LinkList Header__LinkList--${capitalizeFirstLetter(linkList)}`, {
        "Header__LinkList--active": currentPath === routePath,
      })}
      key={uuidv4()}>
      <A
        className={Class(`Header__Link Header__Link--${capitalizeFirstLetter(linkList)}`)}
        href={routePath}
        title={`Back to ${routeTitle}`}
        key={uuidv4()}>
        <div>{routeTitle}</div>
      </A>
    </div>
  );
}

HeaderLink.defaultProps = {
  linkList: PropTypes.string,
  routePath: PropTypes.string,
};

HeaderLink.propTypes = {
  linkList: PropTypes.string,
  routePath: PropTypes.string,
};
