import React, { useContext } from "react";
import { usePath } from "hookrouter";
import Class from "classnames";
import * as Utils from "~src/helper/Utilities";

import "./HeaderLinkIndicator.scss";
import RouterContext from "~context/RouteContext";

export function HeaderLinkIndicator() {
  const routes = useContext(RouterContext);
  const Path = usePath();
  let arrowClass = "";

  Object.entries(routes).forEach(([key, value]) => {
    if (value === Path) {
      arrowClass = key;
    }
  });

  // let locale = routes[Object.keys(routes).find((k) => k.indexOf(Path) !== -1)];

  // console.log(locale);

  console.log("arrow", arrowClass);
  return (
    <div className={Class("Header__LinkIndicatorWrapper")}>
      <span
        className={Class(
          `Header__LinkIndicatorArrow Header__LinkIndicatorArrow--${Utils.capitalizeFirstLetter(
            arrowClass,
          )}`,
        )}
      />
    </div>
  );
}
