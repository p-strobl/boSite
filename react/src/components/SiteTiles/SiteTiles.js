import React, { useContext } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import RouterContext from "~context/RouteContext";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  const routes = useContext(RouterContext);
  const sites = Object.entries(routes).filter(([key, value]) => {
    return key !== "home" ? key : false;
  });

  return (
    <div className={Class("SiteTiles")}>
      {sites.forEach((element) => {
        const siteName = element[0];
        const sitePath = element[1];
        return (
          <SiteTile key={uuidv4()} siteName={siteName} sitePath={sitePath} />
        );
      })}
    </div>
  );
}
