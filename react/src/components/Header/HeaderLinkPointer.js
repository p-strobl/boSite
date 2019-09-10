import React, { useContext } from "react";
import { usePath } from "hookrouter";
import Class from "classnames";
import * as Utils from "~src/helper/Utilities";

import "./HeaderLinkPointer.scss";
import RouterContext from "~context/RouteContext";

export function HeaderLinkPointer() {
  const routes = useContext(RouterContext);
  const Path = usePath();
  let arrowClass = "";

  Object.entries(routes).forEach(([key, value]) => {
    if (value === Path) {
      arrowClass = key;
    }
  });

  return (
    <div className={Class("Header__LinkPointerWrapper")}>
      <span
        className={Class(
          `Header__LinkPointerArrow Header__LinkPointerArrow--${Utils.capitalizeFirstLetter(
            arrowClass,
          )}`,
        )}
      />
    </div>
  );
}
