import React, { useContext } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import RouterContext from "~context/RouteContext";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  const routes = useContext(RouterContext);

  const sites = Object.keys(routes).filter((key) => {
    return key !== "home" ? key : false;
  });

  return (
    <div className={Class("SiteTiles")}>
      {sites.map((value) => {
        return <SiteTile key={uuidv4()} siteName={value} />;
      })}
    </div>
  );
}
