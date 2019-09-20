import uuidv4 from "uuid/v4";
import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { A, usePath } from "hookrouter";

import * as Utils from "~src/helper/Utilities";

import "./HeaderLink.scss";

export function HeaderLink({ linkList, routePath }) {
  const currentPath = usePath();
  const splitKey = Utils.splitOnCamelCase(linkList);

  return (
    <div
      className={Class(
        `Header__LinkList Header__LinkList--${Utils.capitalizeFirstLetter(
          linkList,
        )}
          ${currentPath === routePath ? "Header__LinkList--active" : ""}`,
      )}
      key={uuidv4()}>
      <A
        className={Class(
          `Header__Link Header__Link--${Utils.capitalizeFirstLetter(linkList)}`,
        )}
        href={routePath}
        title={`Back to ${linkList}`}
        key={uuidv4()}>
        <div>{Utils.capitalizeFirstLetter(splitKey)}</div>
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
