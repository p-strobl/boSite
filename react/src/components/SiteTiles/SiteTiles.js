import React, { useContext } from "react";
import uuid from "uuid/v4";

import RouterContext from "~context/RouteContext";

import { SiteTile } from "./SiteTile";

import "./SiteTiles.scss";

export function SiteTiles() {
  const uiClasses = {
    siteTile: "SiteTiles",
  };

  const routerContext = useContext(RouterContext);
  const routes = Object.entries(routerContext.routes).filter(([route]) => {
    return route !== "home";
  });
  return (
    <div className={uiClasses.siteTile}>
      {routes.map((route) => {
        return <SiteTile key={uuid()} site={route[1]} />;
      })}
    </div>
  );
}
