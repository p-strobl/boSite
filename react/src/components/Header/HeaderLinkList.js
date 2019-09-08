import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";
import * as Utils from "~src/helper/Utilities";
import RouterContext from "~context/RouteContext";

import "./HeaderLinkList.scss";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);

  const links = Object.entries(routes).map(([key, value]) => {
    const splitKey = Utils.splitOnCamelCase(key);

    return (
      <div
        className={Class(
          `Header__LinkList Header__LinkList--${Utils.capitalizeFirstLetter(
            key,
          )}`,
        )}
        key={uuidv4()}>
        <A
          className={Class(
            `Header__Link Header__Link--${Utils.capitalizeFirstLetter(key)}`,
          )}
          href={value}
          title={`Back to ${key}`}
          key={uuidv4()}>
          <div>{Utils.capitalizeFirstLetter(splitKey)}</div>
        </A>
      </div>
    );
  });

  return <>{links}</>;
}
