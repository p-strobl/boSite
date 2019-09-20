import React, { useContext } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import RouterContext from "~context/RouteContext";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  const routes = useContext(RouterContext);
  const sites = Object.entries(routes).filter(([key, value]) => {
    return key !== "home";
  });

  return (
    <div className={Class("SiteTiles")}>
      {sites.map((element) => {
        const [siteName, sitePath] = element;
        return (
          <SiteTile key={uuidv4()} siteName={siteName} sitePath={sitePath} />
        );
      })}
    </div>
  );
}
