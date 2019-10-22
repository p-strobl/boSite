import React, { useContext } from "react";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import RouterContext from "~context/RouteContext";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  const routerContext = useContext(RouterContext);
  const routes = Object.entries(routerContext.routes).filter(([route]) => {
    return route !== "home";
  });
  return (
    <div className={Class("SiteTiles")}>
      {routes.map((route) => {
        return <SiteTile key={uuidv4()} site={route[1]} />;
      })}
    </div>
  );
}
